require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
      :check_opengraph => true,
      :assume_extension => true,
      :only_4xx => true,
      :url_ignore => [/.*.drupal.org/, /drupal.org/],
      :check_favicon => true,
      :check_html => true,
      :allow_hash_href => true
  }
  HTMLProofer.check_directory("./_site", options).run
end
