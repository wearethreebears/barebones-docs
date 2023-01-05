<script setup>
  import BonesImage from '@barebones/components/Image/Image.vue';
</script>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Image (BonesImage)

## Overview
The Barebones `Image` component uses reserves it's space with a wrapper div preventing content shift and uses browsers built in lazy loading to load images only when needed. An onload event allows you to customize any loaded animation.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element, a wrapper around the image which reserves the image's space on the page until it's loaded. |
| image | The image element. |

## Props

| Prop name | Description |
|-----------|-------------|
| image | The `image` an `Object` of type `Image`, the `Image` type has 4 required properties, see [types](/guide/components/image.html#prop-types) |

## Prop Types

### Image

```ts
export interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}
```

## Component Type

```ts
export interface Image {
  parts: Parts;
  loadingDefault: string;
  loadedFalse: string;
  loadedTrue: string;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```html
<BonesImage
  :image="{
    url: 'goodfellas.png',
    width: 150,
    height: 150,
    alt: 'Goodfellas movie poster',
  }"
/>
</BonesModal>
```

### Output

<BonesImage
  :image="{
    url: 'goodfellas.jpg',
    width: 150,
    height: 150,
    alt: 'Goodfellas movie poster',
  }"
/>