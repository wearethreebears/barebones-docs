# Text (BonesText)

## Overview
The Barebones `Text` component is designed be used for all text elements.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| tag | `tag` accepts the following HTML elements names: `a`, `nuxt-link`, `router-link`, `address`, `time`, `span`, `strong`, `div`, `p`, `h1`, `h2`, `h3` `h4`, `h5`, `h6`, `address`, `li`, `blockquote`, `dt`,`dd`, `figcaption` and will default to `p`|

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Component Type

```ts
export interface Text {
  parts: Parts;
}
```