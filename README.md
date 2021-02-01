# Crust-Tastic Jekyll-Theme
A configurable Jekyll theme optimized for GitHub Pages

## Setup
Want to use this theme?

### New Site
If you are making a new site, just use [this template (regulad/crust-tastic-template)](https://github.com/regulad/crust-tastic-template).

### Existing Site
Want to migrate your site to this theme? Simply add these lines to your `_config.yml`:

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

## Custom Configuration
* ### Content
  * `github_info: truthy/falsey` Enables/Disables the GitHub description & link.
    * Default: `false`
  * `navigation: truthy/falsey, or "subfolder"` Enables/Disables navigation in the footer. Subfolder sorts it into subfolders.
    * Default: `false`
* ### Extra 
  * `favicon: /path/to/favicon/` Controls site favicon. If a falsey value is provided, then the favicon will be disabled. 
    * Default: `false`
  * `gtag: {gtag-id}` Controls site gtag. If a falsey value is provided, then gtag is disabled.
    * Default: `false`

Subfolder Example:

```yaml
list_title: Navigation
entries:
  - title: Pages
    subfolderitems:
      - page: Home
        url: /
```
