require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
      :check_opengraph => true,
      :assume_extension => true,
      :only_4xx => true,
      :url_ignore => [/.*.drupal.org/, /drupal.org/],
      :check_favicon => false,
      :check_html => true,
      :allow_hash_href => true,
      :empty_alt_ignore => true,
      :alt_ignore => '/.*/'
  }
  HTMLProofer.check_directory("./_site", options).run
end
