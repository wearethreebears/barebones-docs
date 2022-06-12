# Modal

## Overview
The Barebones `Modal` component is wrapped by the Barebones `Overlay` component. The `Modal` component has buttons to trigger display and a focus trap to prevent keyboard users from accessing other parts of the application when the `Modal` component is displayed.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| titleWrapper | Element that wraps the title slot. |
| modalClose | The Modal close button element. This button is only visable if the `showCloseButton` props is set to `BOTH` or `MODAL` |
| overlayClose | The Overlay close button element. This button is only visable if the `showCloseButton` props is set to `BOTH` or `OVERLAY`. |

| Prop name | Description |
|-----------|-------------|
| showCloseButton | `showCloseButton` accepts one of three states: `MODAL`, `OVERLAY`, and `BOTH` - It is best to import these constants from the barebones package `import {CLOSE_BUTTON_DISPLAYS } from "@barebones/constants/modal"` as button display names may change. The `showCloseButton` prop controls which close buttons are displayed. By default, this is set to `MODAL`  |
| modalOpenProps | `modalOpenProps` allows you to pass props to the open button which is a Barebones `Button` component. |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue displays the main content in the modal. |
| title | The `title` slot is designed to accept a text title |
| modalClose | The `modalClose` slot defaults the the text "close", but you can pass an Icon or alternative text. This button is only visable if the `showCloseButton` props is set to `both` or `modal`. |
| overlayClose | The `overlayClose` slot defaults the the text "close", but you can pass an Icon or alternative text. This button is only visable if the `showCloseButton` props is set to `both` or `overlay`. |

## Component Type

```ts
export interface Modal {
  parts: Parts;
}
```