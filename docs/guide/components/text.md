<script setup>
  import BonesText from '@barebones/components/Text/Text.vue';
</script>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Text (BonesText)

## Overview
The Barebones `Text` component is designed be used for all text elements.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| tag | `tag` accepts the following HTML elements names: `a`, `nuxt-link`, `router-link`, `address`, `time`, `span`, `strong`, `div`, `p`, `h1`, `h2`, `h3` `h4`, `h5`, `h6`, `address`, `li`, `blockquote`, `dt`,`dd`, `figcaption` and will default to `p`|

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Component Type

```ts
export interface Text {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```html
<BonesText>
   The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
</BonesText>
```
### Output
<BonesText>
  The Bronx, New York, 1960. 9-year-old Calogero grows up admiring and fascinated by the local mob boss, Sonny. Calogero's father, Lorenzo, wants to have nothing to do with the mob and does his best to keep his son away from Sonny and mob business. However, it may prove a losing battle.
</BonesText>