::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Aside (BonesAside)

## Overview
The Barebones `Aside` component is simply a layout component that extends the HTML `<aside>` element and excepts a default slot.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Component Type

```ts
export interface Aside {
  parts: Parts;
}
```

## Examples

## Examples

### Code
```html
<BonesAside></BonesAside>
```