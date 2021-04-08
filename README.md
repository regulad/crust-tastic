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

Make sure your `Gemfile` is setup correctly, too.

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
  favicon: truthy/falsey # Controls the favicon of the webpage. If you would like to use a custom path, substitute truthy/falsey with /path/to/favicon, otherwise it will use the root of the site.
  gtag: G-YOURTAGHERE # Controls site gtag.
  addons:
    menu:
      google_search: 96969696969696969 # Controls Google Programmable Search. Enter your CX value.
      navigation: false # See below.
    jump: truthy/falesy # Controls displaying the "Jump to top of page button."
  header: # Controls displaying the header.
    title: truthy/falesy # Controls displaying the title.
    github_desc: truthy/falsey # Controls showing the GitHub description next to the title.
    pin: true # Pins header to the top of the page.
  footer: # Controls displaying the footer.
    navigation: truthy/falsey # See below.
    github_link: truthy/falsey # Controls the GitHub link at the bottom of the page.
    google_translate: truthy/falsey # Controls google translate.
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
### Custom CSS
There are two ways to insert custom CSS. 
  * SCSS skin (preferred)
    * See `_sass/README.md` for instructions.
  * Add CSS
    * You can create stylesheet in `assets/css` and then reference it in `_includes/head/js.html`.
    * It will be loaded with the other stylesheets

### Custom HTML
Custom HTML can be inserted like any on any other Jekyll page.
  * Inline HTML
    * You can write HTML straight into your Markdown pages.
  * Insert HTML
    * You can create an include, preferably in `_includes/elements`, that contains HTML. This include can then be referenced normally.
    * If you want to insert HTML into baked content, like headings, modify the existing files in `_includes`.
  * Template HTML
    * You can create a template that features custom HTML.
