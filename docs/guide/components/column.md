# Column

## Overview
The Barebones `Column` component is designed to slot inside the Barebones `Grid` component.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| tag | `tag` accepts the type `Layout`, see [types](/guide/components/column.html#types). The default value is `div` |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Types

### Layout


```ts
export type Layout =
  | "main"
  | "header"
  | "footer"
  | "section"
  | "main"
  | "div"
  | "article"
  | "ul"
  | "li"
  | "aside"
  | "ol";
```