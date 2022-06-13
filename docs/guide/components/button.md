# Button (BonesButton)

## Overview
The Barebones `Button` component can be a button, internal router link (RouterLink or NuxtLink), or an external link, depending on the props passed. By default the `Button` component is button element, but can become a link by passing a URL string to the `to` prop. If the URL begins with a `/` the `Button` component will assume it is internal. The `Button` component takes a number of slots, please see [slots](/guide/components/button.html#slots) below.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| to | `to` accepts a URL string, if the string begins with a `/` the Button component will become an internal router link, if not it will become an external link |
| state | `state` accepts four states: `DEFAULT`, `PROCESSING`, `LOADING` and `COMPLETE` - It is best to import these constants from the Barebones package `import {BUTTON_STATES } from "@barebones/constants/button"` as state names may change. The state prop controls which slot is displayed. |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is the default Vue slot and will display if the `state` prop is "default" |
| processing | The `processing` slot will display if the `state` prop is "processing" |
| loading | The `loading` slot will display if the `state` prop is "loading" |
| complete | The `complete` slot will display if the `state` prop is "complete" |

Barebones does not assume you would like to use different button states, so these slots are blank by default. If you'd like to use these slots, to avoid repetition it's suggested you wrap the BareBones `Button` component in a local component. (Current suggested naming convention for components that wrap Barebones components in this manner is `AppButton`).

## Component Type

```ts
export interface Button {
  parts: Parts;
}
```