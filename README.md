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

## `_config.yml` options
Nothing is turned on by default, so you prob want to turn on some things.

```yaml
crust_tastic:
  favicon: truthy/falsey # Controls the favicon of the webpage. If you would like to use a custom path, substitute truthy/falsey with /path/to/favicon, otherwise it will use the root of the site.
  gtag: G-YOURTAGHERE # Controls site gtag
  header:
    title: truthy/falesy # Controls Title
    github_desc: truthy/falsey # Controls the GitHub description.
  footer:
    navigation: truthy/falsey # See below.
    github_link: truthy/falsey # Controls the GitHub link at the bottom of the page.
    google_translate: truthy/falsey # Controls google translate
```

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

## Custom SCSS
For custom SCSS, check [_sass/README.md](https://github.com/regulad/crust-tastic/blob/main/_sass/README.md).
