::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Form (BonesForm)

## Overview
The Barebones `Form` component is form helper used to wrap the Barebones form components. The form defaults to `post`.

## Component parts

| Part name | Description |
|-----------|-------------|
| component | The components root element. |

## Props

| Prop name | Description |
|-----------|-------------|
| action | `action` is required and accepts an action URL|
| method | `method` accepts `POST` or `GET`. The default is `POST` |
| encode | `encode` accepts an enctype for `DEFAULT` or `MEDIA`, `MEDIA` should be used when uploading files. The default value is `DEFAULT` |

## Slots

| Slot name | Description |
|-----------|-------------|
| default | The `default` slot is provided by Vue |

## Component Type

```ts
export interface Form {
  parts: Parts;
}
```

## Examples

### Code
```html
<BonesForm action="/endpoint"></BonesForm>
```