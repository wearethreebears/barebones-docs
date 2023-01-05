<script setup>
  import BonesTabs from '@barebones/components/Tabs/Tabs.vue';
  const tabs = [
      {
        key: 'bronxTale',
        title: 'Bronx Tale',
      },
      {
        key: 'goodfellas',
        title: 'Goodfellas',
      },
    ]
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

# Tabs (BonesTabs)

## Overview
The Barebones `Tabs` component is an accessible keyboard compatible tabbing component.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| navigation | The nav element for the tab buttons |
| navigationList | The ul wrapper that sits inside the navigation element  |
| navigationListItem | The li wrapper for individual tab buttons  |
| navigationButtonActive | The tab button when is the current active tab |
| navigationButton | The tab button when not the current active tab |
| contentItems | The element that wraps all of the content items |
| contentItem | The element that wraps the tabs content slot |

| Prop name | Description |
|-----------|-------------|
| tabs |  `tabs` accepts an array of the type `Tab`, see [types](/guide/components/tabs.html#prop-types).|
| renderInactiveTabs | `renderInactiveTabs` allows you to render inactive tabs in the DOM, by default this is set to `true`, if you'd like inactive tabs hidden in the DOM you can set this to `false`.  |

## Slots

| Slot name | Description |
|-----------|-------------|
| Wildcard* | The wildcard slot is the content of a tab it's name should match a key in the tabs prop array  |

## Prop Types

```ts
export interface Tab {
  key: string;
  title: string;
}
```

## Component Type

```ts
export interface Tabs {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```html
<BonesTabs
  :tabs="[
    {
      key: 'bronx-tale',
      title: 'Bronx Tale',
    },
    {
      key: 'goodfellas',
      title: 'Goodfellas',
    },
  ]"
>
  <template #bronxTale> The Bronx...</template>
  <template #goodfellas>The story of Irish-Italian...</template>
</BonesTabs>
```
### Output
<br />
<BonesTabs :tabs="tabs">
  <template #bronxTale>
    The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
  </template>
  <template #goodfellas>
    The story of Irish-Italian American, Henry Hill, and how he lives day-to-day life as a member of the Mafia. Based on a true story, the plot revolves around Henry and his two unstable friends Jimmy and Tommy as they gradually climb the ladder from petty crime.
  </template>
</BonesTabs>
