---
---
{% if site.crust_tastic.gtag %}
  {% include addons/js/gtag.js file="/assets/js/" %}
{% endif %}
{% if site.crust_tastic.header.pin %}
  {% include addons/js/pin_header.js file="/assets/js/" %}
{% endif %}
{% if site.crust_tastic.header.menu %}
  {% include addons/js/header_menu.js file="/assets/js/" %}
{% endif %}
{% if site.crust_tastic.footer.google_translate %}
  {% include addons/js/google_translate.js file="/assets/js/" %}
{% endif %}
{% if site.crust_tastic.footer.jump %}
  {% include addons/js/jump_to_top.js file="/assets/js/j" %}
{% endif %}
