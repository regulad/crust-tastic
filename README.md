# Crust-Tastic Jekyll Theme
A lightweight & versatile Jekyll theme designed for GitHub-Pages

## Features

* Configurable & Customizable
* Nothing enabled by default
* Fully open source with a strict license (GNU GENERAL PUBLIC LICENSE)
* Compatible with GitHub-Pages
* No need to install any Gems (Besides `github-pages`)
* Easy to get started with
* Lightweight
* Compatible with all browsers (designed to Mozilla spec)

## Setup
Want to use this theme?

Add these lines to your `_config.yml`, or update them if they are already present.

```yaml
remote_theme: regulad/crust-tastic@main # You can also use the latest tag.

plugins:
  - github-pages
```

Make sure your `Gemfile` is set up correctly, too.

```ruby
source 'https://rubygems.org'
group :jekyll_plugins do
  gem "github-pages"
end
```

## Customization & Configuration
`crust-tastic` was designed with modularity and customization in mind.

### `_config.yml` options
Nothing is turned on by default, so you will want to turn on some things.

Some sensible settings can be seen in `_config.yml`.

```yaml
crust_tastic:
  github: truthy/falsey # Controls the GitHub info displayed at the top and the bottom of the page.
  gtag: G-YOURTAGHERE # Controls site gtag.  
  favicon: truthy/falsey # Controls the favicon of the webpage. If you would like to use a custom path, substitute truthy/falsey with /path/to/favicon, otherwise it will use the root of the site.
  header_menu:
    google_search: 96969696969696969 # Controls Google Programmable Search. Enter your CX value.
    navigation: false # See below.
```

#### Navigation
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
