# Column

## Overview
The Barebones `Grid` component is designed to wrap the Barebones `Column` component.

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