<script setup>
  import { reactive } from 'vue';
  import BonesFormInput from '@barebones/components/FormInput/FormInput.vue';
  import BonesFormFieldSet from '@barebones/components/FormFieldSet/FormFieldSet.vue';

  const formData = reactive({
    film: "goodfellas",
  });

  const films =  [
    { label: "Bronx Tale", value: "bronx-tale" },
    { label: "Goodfellas", value: "goodfellas" },
  ];
</script>

<style>
  input[type="radio"] {
    border-style: solid;
  }
</style>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::


# FormFieldSet(BonesFormFieldSet)

## Overview
The Barebones `FormFieldSet` component is used wrap groups of inputs, the most common use case is grouping radio buttons.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| labelWrapper | The div that wraps the label (legend). |
| fieldsWrapper | The div that wraps the grouped fields. |

## Props

| Prop name | Description |
|-----------|-------------|
| label |  The `label` is a string prop and is used to label the grouped inputs |

## Component Type

```ts
export interface FormInput {
  parts: Parts;
}
```

## Examples

::: warning
Examples use tailwind/salient theme, to use this theme you may add it using the theme npx command and installing Tailwind JIT in your application. [Read more about themes](/guide/themes.html).
:::

### Code
```vue
<script setup>
  /* */
  const formData = reactive({
    film: "goodfellas",
  });

  const films =  [
    { label: "Bronx Tale", value: "bronx-tale" },
    { label: "Goodfellas", value: "goodfellas" },
  ];
  /* */
</script>
```
```html
<BonesFormFieldSet label="Favorite film">
  <BonesFormInput
    v-for="film in films"
    :key="film.value"
    type="radio"
    name="film"
    :label="film.label"
    :value="film.value"
    :checked-on-mount="formData.film === film.value"
    v-model:value="formData.film"
  />
</BonesFormFieldSet>
```

### Output
<br />
<BonesFormFieldSet label="Favorite film">
  <BonesFormInput
    v-for="film in films"
    :key="film.value"
    type="radio"
    name="film"
    :label="film.label"
    :value="film.value"
    :checked-on-mount="formData.film === film.value"
    v-model:value="formData.film"
  />
</BonesFormFieldSet>