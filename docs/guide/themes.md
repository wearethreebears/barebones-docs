::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Themes

At present Barebones only has two theme choices, Blank and Tailwind Salient. Over time we plan to add more themes built with more CSS libraries, including but not limited to UnoCSS, WindiCSS and of course Plain CSS.

The Blank theme is what it says on the tin, a blank theme, it contains all the configuration files but with no style mapping. The Tailwind Salient theme is a basic theme that can be seen throughout the docs examples and is built with Tailwind CSS, to use this theme you will need to add Tailwind CSS to your application.

## Installing a theme

### Installing the blank theme

```
npx @wearethreebears/barebones theme blank
```

### Installing the Tailwind Salient theme

```
npx @wearethreebears/barebones theme tailwind/salient
```

Install Tailwind JIT in your application per the [Tailwind documentation](https://tailwindcss.com/).
Update your `tailwind.config.js` file to include Barebones configuration files:
```js
module.exports = {
/* */
  content: [
    /* */
    "./barebones/**/*.ts"
    /* */
  ],
  /* */
}
```