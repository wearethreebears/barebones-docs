# Column

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
| image | The `image` an `Object` of type `Image`, the `Image` type has 4 required properties, see [types](/guide/components/image.html#types) |

## Types

### Image

```ts
export interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}
```
