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

* `github_info: truthy/falsey` Controls the GitHub description & link.
* `favicon: truthy/falsey` Controls the favicon of the webpage. If you would like to use a custom path, subsitute `truthy/falsey` with `/path/to/favicon`, otherwise it will use the root of the site.
* `gtag: {gtag-id}` Controls site gtag. If a falsey value is provided, then gtag is diabled.

### Navigation
* `navigation: truthy/falsey, or "subfolder"` Controls the navigation in the footer. See [my demo website](https://regulad.xyz/crust-tastic/) for a full example. Subfolder enables subfolders.
Subfolder Example:
```yaml
list_title: Navigation
entries:
  - title: Pages
    subfolderitems:
      - page: Home
        url: /
```
