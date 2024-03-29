::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Overlay (BonesOverlay)

## Overview
The Barebones `Overlay` component is designed to wrap the Barebones `Modal` component. The `Overlay` component may also come in useful when building pop out menus or other components that need to sit above the rest of your application.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| overlayInner | Component that sits directly inside the root and contains the default slot |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Component Type

```ts
export interface Overlay {
  parts: Parts;
}
```

## Examples

### Code
```html
<BonesOverlay></BonesOverlay>
```