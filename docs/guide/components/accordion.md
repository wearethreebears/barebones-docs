<script setup>
  import BonesAccordion from '@barebones/components/Accordion/Accordion.vue';
</script>

<style>
  .m-0 {
    margin: 0 !important;
  }
  .list-style-none {
    list-style: none !important;
  }
  .p-0 {
    padding: 0 !important;
  }
</style>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Accordion (BonesAccordion)

## Overview

The Barebones `Accordion` component is an accessible keyboard compatible accordion component.

## Component parts

| Part name      | Description                                            |
| -------------- | ------------------------------------------------------ |
| component      | The components root element.                           |
| title          | The nav element for the tab buttons                    |
| contentWrapper | The ul wrapper that sits inside the navigation element |
| content        | The li wrapper for individual tab buttons              |

| Prop name     | Description                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| name          | `name` accepts an string of alphanumeric characters, dashes and underscores, `name` is a unique identifier for your accordion |
| initialState  | `initialState` accepts type `State` and can be `OPEN` or `CLOSED`, initialState defaults to `OPEN`                            |
| disableToggle | `disableToggle` accepts boolean, if `true`, accordion will always be open, `disableToggle` defaults to `false`                |

## Slots

| Slot name | Description                                                                                                                                                                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title     | The `title` slot is contains the button/title (state trigger) name - Barebones uses a slot rather than a prop for this title for more freedom like adding icons etc. You should ensure anything you place in the `title` slot is valid HTML inside a HTML `button` element. |
| content   | The `content` slot is contains the content of your accordion                                                                                                                                                                                                                |

## Prop Types

```ts
export type State = "OPEN" | "CLOSED";
```

## Component Type

```ts
export interface Accordion {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code

```html
<BonesAccordion name="bronx-tale">
  <template #title>What is the plot of A Bronx tale?</template>
  <template #content>
    <p>
      The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
    </p>
  </template>
</BonesTabs>
```

### Output

<br />
<BonesAccordion name="bronx-tale">
  <template #title>What is the plot of A Bronx tale?</template>
  <template #content>
    <p>
      The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
    </p>
  </template>
</BonesAccordion>
