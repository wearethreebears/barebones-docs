<script setup>
  import BonesGrid from '@barebones/components/Grid/Grid.vue';
  import BonesColumn from '@barebones/components/Column/Column.vue';
</script>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Grid (BonesGrid)

## Overview
The Barebones `Grid` component is designed to wrap the Barebones `Column` component.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| tag | `tag` accepts the type `Layout`, see [types](/guide/components/grid.html#prop-types). The default value is `div` |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Prop Types

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

## Component Type

```ts
export interface Grid {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```html
<BonesGrid>
  <BonesColumn :span="['6', 'md-3']"></BonesColumn>
  <BonesColumn :span="['6', 'md-3']"></BonesColumn>
  <BonesColumn :span="['md-6']"></BonesColumn>
  <BonesColumn></BonesColumn>
</BonesGrid>
```

### Output

::: warning
For display purposed padding and background colors have ben added to the grid and column components.
:::

<BonesGrid class="bg-gray-300">
  <BonesColumn class="p-4 bg-gray-400" :span="['6', 'md-3']"></BonesColumn>
  <BonesColumn class="p-4 bg-gray-400" :span="['6', 'md-3']"></BonesColumn>
  <BonesColumn class="p-4 bg-gray-400" :span="['md-6']"></BonesColumn>
  <BonesColumn class="p-4 bg-gray-400"></BonesColumn>
</BonesGrid>