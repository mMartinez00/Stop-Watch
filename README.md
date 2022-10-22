# Stop Watch

Basic Stop Watch with Start, Pause and Reset buttons. Includes a Dark and Light theme toggle switch.

## Built with:

- HTML
- CSS
- JavaScript

I added the feature of toggling to light and dark mode. To toggle between modes a input type of checkbox was used to toggle the themes. Using CSS I styled the checkbox to transform it into a switch. For a guide on how to achieve this check out this tutorial: [w3schools - How TO - Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp)

```html
<div class="toggle-mode">
  <input type="checkbox" id="switch" />
  <label for="switch" id="toggle"></label>
</div>
```

Assigning the `id` to `switch` on the checkbox I can target it in the JS file. This also serves to link the checkbox and `label` element by setting the `for` attribute to `switch`.

```javascript
const toggle = document.getElementById("switch");

toggle.addEventListener("change", () => {
  const body = document.querySelector("body");

  body.classList.toggle("light-theme");
});
```

When the user clicks on the switch the class of `light-theme` is toggled on the `body`.
