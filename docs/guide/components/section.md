::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Section (BonesSection)

## Overview
The Barebones `Section` component is simply a layout component that extends the HTML `<section>` element and excepts a default slot.

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
export interface Section {
  parts: Parts;
}
```

## Examples

### Code
```html
<BonesSection></BonesSection>
```