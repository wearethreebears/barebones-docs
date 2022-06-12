# Tabs

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
| Wildard* | The wildcard slot is the content of a tab it's name should match a key in the tabs prop array  |

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