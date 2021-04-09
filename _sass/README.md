# Custom SCSS
To load custom SCSS, you need to create a skin. Similar to [minima](https://github.com/jekyll/minima), you can create a file in `_sass/skins` then specify the skin in `_config.yml`.

Example:

```yaml
crust_tastic:
  skin: fancypants
```

For examples on what a skin should look like, check `/skins/crust-tastic`.

All skins need a `style.scss`, `colors.scss` file.
