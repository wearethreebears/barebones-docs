<script setup>
  import { reactive } from 'vue';
  import BonesFormSelect from '@barebones/components/FormSelect/FormSelect.vue';

  const formData = reactive({
    film: "goodfellas",
  });

  const films =  [
    { label: "Bronx Tale", value: "bronx-tale" },
    { label: "Goodfellas", value: "goodfellas" },
  ];
</script>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# FormInput (BonesFormSelect)

## Overview
The Barebones `FormSelect` component is an select element that is wrapped in a `FormGroup` component. `FormSelect` accepts an array of options.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| label |  The `label` is a string prop and is passed to the `FormGroup` and used to label the input.|
| error |   The `error` is a string prop and is passed to the `FormGroup` and used to display an error if one exists. |
| value |  The `value` prop is the value as set by the parent component. |
| placeholder |  The `placeholder` prop is a string and sets a placeholder on the input |
| disabled |  The `disabled` prop is a boolean that sets the disabled state as `true` or `false` |
| formGroupProps |  `formGroupProps` are props that are passed to `FormGroup` if you'd like to override defaults |
| options | `options` actions an array of type `SelectOption` which is looped through within the `select`. See [types](/guide/components/form-select.html#prop-types).|

## Prop Types

### FormInputType

```ts
export interface SelectOption {
  label: string;
  value: string;
}
```

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
<BaseForm action="/save-favorite-movie">
  <BonesFormSelect
    name="film"
    label="Favorite Film"
    v-model:value="formData.film"
    :options="films"
  />
</BaseForm>
```
### Output
 <BonesFormSelect
    name="film"
    label="Favorite Film"
    v-model:value="formData.film"
    :options="films"
  />