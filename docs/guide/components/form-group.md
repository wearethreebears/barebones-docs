::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# FormGroup (BonesFormGroup)

## Overview
The Barebones `FormGroup` component is used exclusively to wrap the `FormInput` and `FormSelect` elements.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |
| labelWrapper | The div that wraps the label. |
| label | The label element. |
| inputWrapper | The div that wraps the input. |
| input | The input element. |
| customInput | The custom input from ``FormInput` |
| errorWrapper | The div that wraps errors |

## Props

| Prop name | Description |
|-----------|-------------|
| label |  The `label` is a string prop and is passed to the `FormGroup` and used to label the input.|
| error |   The `error` is a string prop and is passed to the `FormGroup` and used to display an error if one exists. |
| formErrorProps |  `formErrorProps` are props that are passed to `FormError` if you'd like to override defaults |
| groupType | `groupType` is the input type, passed from `FormInput` or `FormSelect` |

## Component Type

```ts
export interface FormInput {
  parts: DynamicParts;
}
```

## Examples

```html
<BonesFormGroup
  label="First name"
  name="first_name"
>
  <input />
</BaseFormGroup>
```