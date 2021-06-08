# Addons

For adding on JavaScript or CSS stylesheets, sometimes just making an SCSS skin won't do.

The Addons system allows you to configure more than an SCSS skin.

To enable addons, set the YAML key `crust_tastic.addons` to True.

List of Addon files:

* `html.html`: HTML to be loaded in-between the body and the footer.
* `scss.scss`: SCSS to be loaded into `assets/css/addons.scss`.
* `js.js`: JavaScript to be loaded into `assets/js/addons.js`
  

* `css_load.html`: HTML to be inserted into `<head>`, best used for loading CSS stylesheets.
* `js_load.html`: HTML to be inserted into `<head>`, best used for loading JavaScript libraries.