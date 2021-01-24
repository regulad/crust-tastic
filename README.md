# Crust-Tastic Jekyll-Theme
A configurable Jekyll theme optimized for GitHub Pages

## Setup
Want to use this theme? Easy! Simply add these lines to your `_config.yml`:
```yaml
remote_theme: regulad/crust-tastic@main

plugins:
  - github-pages
```

Make sure your Gemfile is setup correctly, too.
```ruby
source 'https://rubygems.org'
group :jekyll_plugins do
  gem "github-pages"
end
```

## Configuration

* `show_header: truthy/falsey` Controls the footer at the bottom of the page. This will have basic navigation. See [my demo website](https://regulad.xyz/crust-tastic/) for a full example.
* `github_info: truthy/falsey` Controls the GitHub description & downloads underneath the header.

* `favicon: truthy/falsey` Controls the favicon of the webpage. If you would like to use a custom path, subsitute `truthy/falsey` with `/path/to/favicon`, otherwise it will use the root of the site.

* `navigation: {navigation yml}` Controls the navigation at the bottom of the page. See [my demo website](https://regulad.xyz/crust-tastic/) for a full example.
* `gtag: {gtag-id}` Controls site gtag. If a falsey value is provided, then gtag is diabled.
