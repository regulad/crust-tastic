# Crust-Tastic Jekyll Theme
A lightweight & versatile Jekyll theme built for Github-Pages

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

## _config.yml options
***Nothing* is enabled by default!** Make sure to enable anything you want.

* `crust_tastic`
  * `github_info: truthy/falsey` Controls the GitHub description & link.
  * `favicon: truthy/falsey` Controls the favicon of the webpage. If you would like to use a custom path, substitute `truthy/falsey` with `/path/to/favicon`, otherwise it will use the root of the site.
  * `gtag: {gtag-id}` Controls site gtag. If a falsey value is provided, then gtag is disabled.
  * `google_translate: truthy/falsey` Controls Google Translate embed.

Example:

```yaml
crust_tastic:
  github_info: true
  favicon: false
  gtag: G-123123123
  google_translate: true
```

### Navigation
* `navigation: truthy/falsey, or "subfolder"` Controls the navigation in the footer. See [my demo website](https://regulad.xyz/crust-tastic-demo/) for a full example. Subfolder enables subfolders.

Subfolder Example:

```yaml
list_title: Navigation
entries:
  - title: Pages
    subfolderitems:
      - page: Home
        url: /
```

## Custom SCSS
For custom SCSS, check [_sass/README.md](https://github.com/regulad/crust-tastic/blob/main/_sass/README.md).

{% for item in site.crust_tastic.stylesheets %}
  <p>url: {{ item.url }}</p>
{% endfor %}
