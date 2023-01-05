<script setup>
  import { reactive } from 'vue';

  import BonesInput from '@barebones/components/FormInput/FormInput.vue';

  const formData = reactive({
    firstName: "",
  });
</script>

::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# FormInput (BonesFormInput)

## Overview
The Barebones `FormInput` component is an input element that is wrapped in a `FormGroup` component. `FormInput` accepts *all* input types, including `textarea`.

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
| type |  The `type` prop accepts type `FormInputType` which accepts *all* input types including textarea. See [types](/guide/components/form-input.html#prop-types).|
| multipleFiles | `multipleFiles` is a boolean and used only on `file` inputs. It will set whether file upload accepts 1 or multiple files. |
| min |  `min` is a number used on `range` to set the minimum value. It defaults to 0. |
| max |  `max` is a number used on `range` to set the maximum value. It defaults to 100. |
| step | `step` is a number used on `range` to set the step value. It defaults to 1. |
| checkedOnMount | `checkedOnMount` is a boolean used on `checkbox` and `radio` types to declare if it is checked on load. |


## Slots

| Slot name | Description |
|-----------|-------------|
| customInput | The `customInput` slot allows you to create an app level higher order component and add custom switches |
| icon | The `icon` slot allows you to create an app level higher order component and add custom icons |

## Prop Types

### FormInputType

```ts
export type FormInputType =
  | "text"
  | "number"
  | "date"
  | "email"
  | "password"
  | "search"
  | "url"
  | "file"
  | "textarea"
  | "checkbox"
  | "tel"
  | "range"
  | "radio";
```

::: warning
When using input type `file` you should add a `value` prop with an empty string.
:::


## Component Type

```ts
export interface FormInput {
  parts: DynamicParts;
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
    firstName: "",
  });
  /* */
</script>
```
```html
<FormInput 
  name="first-name" 
  label="First Name" 
  v-model:value="formData.firstName" 
/>
```

### Output
<br/>
<BonesInput name="first-name" label="First Name" v-model:value="formData.firstName" />