// if this script errors, you may need to run `node node_modules/puppeteer/install.js`

var fs = require('fs')
var path = require('path')
const puppeteer = require('puppeteer')
const yaml = require('js-yaml')
const frontmatter = require('gray-matter')
var queue = require('queue')
const { utoa } = require('unicode-encode')

const sizes = {
  // height, width
  og: [630, 1200],
  pinterest: [1500, 1000],
  instagram: [1080, 1080]
}

// get arguments from npm script
const args = {}
process.argv.slice(2).forEach(arg => {
  const [ key, value ] = arg.split(':')
  args[key] = value
})

// determine if this is one post or many
let posts = []
if (fs.lstatSync(args.path).isDirectory()) {
  fs.readdirSync(args.path).forEach(file => posts.push(`${args.path}${file}`))
} else {
  posts = [args.path]
}

// get rid of any posts that for whatever reason are not markdown files
posts = posts.filter(post => (path.extname(post) === '.md' || path.extname(post) === '.markdown'))

// get just the frontmatter from all the posts
posts = posts.map(post => frontmatter(fs.readFileSync(post, 'utf8')).data)

// get the data for all authors
const authors = yaml.load(fs.readFileSync('./_data/authors.yml', 'utf8'))

// helper method to pass data to html page
function objectToParams(object) {
  const params = new URLSearchParams
  Object.entries(object).map(entry => {
    let [key, value] = entry
    params.set(key, value)
  })
  return params.toString()
}

// get only data relevant to screenshot
const urls = posts.map(post => objectToParams({
    'post-title': post.seo_title || post.title || '',
    'post-excerpt': post.description || post.excerpt || '',
    'author-name': post.author && authors[post.author].name || authors['lsolesen'].name || '',
    'author-image': post.author && authors[post.author].avatar || authors['lsolesen'].avatar || '',
    'post-image': post.header.overlay_image || post.header.image || post.header.teaser || '',
  })
).map(params => {
  // use `utoa` to encode emojis/special characters
  const url = `https://127.0.0.1:8080/generate-image/${args.type}?${utoa(params)}`
  // uncomment this to print the url for debug purposes
  //console.log(url)
  return url
})

// call chromium, get a buffer
async function takeScreenshot(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    height: sizes[args.type][0],
    width: sizes[args.type][1],
    deviceScaleFactor: 1,
  })
  await page.goto(url)
  const buffer = await page.screenshot()
  await browser.close()
  return Buffer.from(buffer, 'base64')
}

// take a buffer, save an image
async function generateImage(url, path) {
  const buffer = await takeScreenshot(url)
  // strip leading and trailing slashes off of link
  const fixedPath = () => {
    const letters = [...path]
    if (letters[0] === '/') { delete letters[0] }
    if (letters[letters.length - 1] === '/') { delete letters[letters.length - 1] }
    return letters.join('').replace(/\//g, '-')
  }
  const fileName = `./build/generated/${args.type}/${fixedPath()}.png`
  fs.writeFile(fileName, buffer, (err) => {
    if (err) return console.error(err)
    console.log('file saved to ', fileName)
  })
}

// set up a queue so 200+ chromium instances don't open...
var taskList = queue({ results: [] })
taskList.concurrency = 1

// match up urls and posts, save images with the correct file name
// push them to the queue
posts.map(async (post, index) => {
  if(post.permalink) {
    // not every page has a set permalink...
    taskList.push(() => generateImage(urls[index], post.permalink))
  } else {
    // ... so follow the `permalink: /:categories/:title/` pattern from _config.yaml
    //const category = post.categories[0].toLowerCase()

    // build the title different if this is a single file or from a directory
    let title
    if (fs.lstatSync(args.path).isDirectory()) {
      title = `${fs.readdirSync(args.path)[index].match(/\d\d\d\d-\d\d-\d\d-(.*).md/)[1]}`
    } else {
      title = args.path.match(/\d\d\d\d-\d\d-\d\d-(.*).md/)[1]
    }

    const permalink = `${title}`
    taskList.push(() => generateImage(urls[index], permalink))
  }
})

taskList.start(function (err) {
  if (err) throw err
  console.log('done generating images')
})
