<script setup>
  import BonesModal from '@barebones/components/Modal/Modal.vue';
  import BonesText from '@barebones/components/Text/Text.vue';
</script>
<style>
  #modal-title {
    border-top: 0;
    padding: 0;
    margin: 0;
  }
</style>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Modal (BonesModal)

## Overview
The Barebones `Modal` component is wrapped by the Barebones `Overlay` component. The `Modal` component has buttons to trigger display and a focus trap to prevent keyboard users from accessing other parts of the application when the `Modal` component is displayed.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| titleWrapper | Element that wraps the title slot. |
| modalClose | The Modal close button element. This button is only visible if the `showCloseButton` props is set to `BOTH` or `MODAL` |
| overlayClose | The Overlay close button element. This button is only visible if the `showCloseButton` props is set to `BOTH` or `OVERLAY`. |

| Prop name | Description |
|-----------|-------------|
| showCloseButton | `showCloseButton` accepts one of three states: `MODAL`, `OVERLAY`, and `BOTH` - It is best to import these constants from the Barebones package `import {CLOSE_BUTTON_DISPLAYS } from "@barebones/constants/modal"` as button display names may change. The `showCloseButton` prop controls which close buttons are displayed. By default, this is set to `MODAL`  |
| modalOpenProps | `modalOpenProps` allows you to pass props to the open button which is a Barebones `Button` component. |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue displays the main content in the modal. |
| title | The `title` slot is designed to accept a text title |
| modalClose | The `modalClose` slot defaults the the text "close", but you can pass an Icon or alternative text. This button is only visible if the `showCloseButton` props is set to `both` or `modal`. |
| overlayClose | The `overlayClose` slot defaults the the text "close", but you can pass an Icon or alternative text. This button is only visible if the `showCloseButton` props is set to `both` or `overlay`. |

## Component Type

```ts
export interface Modal {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```html
<BonesModal>
  <template #title>
    A Bronx Tale
  </template>
  <BonesText>
    The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
  </BonesText>
</BonesModal>
```

### Output
<br />
<BonesModal>
  <template #title>
    A Bronx Tale
  </template>
  <BonesText>
    The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
  </BonesText>
</BonesModal>