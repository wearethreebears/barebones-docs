::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Configuration

## Overview

Configuring Barebones components is simple. Each component will have 2 associated local files in your project, `.props.ts` and `.parts.ts`. These files will control the component props and component part styles respectively.

## .props.ts
`.props.ts` files determine the props you'd like to pass to your components, this allows you to shape the way you use component styles in a way that works for you. A simple example of what a components `.props.ts` could look like could be a `Column` component, a `Column` should `span` `x` amount of columns in a `Grid`, in the following example, whenever you used the `Column` component, you'd pass `x` to the prop `span`:

```ts
export const classProps: ClassProps = {
  span: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
};
```

In some cases, you or your team might prefer to change prop names, for example, you may choose to change `span` in the above example to `cover`, in which case, you can change that in your local `Column` `.props.ts` file:

```ts
export const classProps: ClassProps = {
  cover: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
};
```

Now, instead of passing `x` to `span`, you can pass `x` to `cover`. `.props.ts files` don't stop at allowing you to change the names of existing props but also allow you to add your own. For example, you may want to add `starts` and `ends` props to `Column`, in which case you can simply add them here:

```ts
export const classProps: ClassProps = {
  cover: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
  starts: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
  starts: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
};
```

## .parts.ts

`.parts.ts` files are used to map props to CSS files. `Parts` refers to the elements that make up a component. Every component has a root element, with the part name `component`, each component then is made up of several other component parts, depending on the complexity. A simple example of what a `.parts.ts` file could look like could be a `Column` component `.parts.ts` file. A column has one component part, the root element, called `component`:

```ts 
// Base Classes

export default function ColumnLocal(): Column {
  const parts: Parts = {
    component: {
      span: {
        default: ["col-span-12"],
        '6': ["col-span-6"],
        '3': ["col-span-6"]
      }
    }
  }
}
```

First level property keys in the `parts` object refer to the component parts in any given component, and the second level refers to a prop key defined in the components `.props.ts` file. In the example above, the `Column` component has a prop called `span`. Third-level properties are where the class mapping for each prop on each component part happens. In the above example, if you were to pass the value `"6"` to the `span` prop on the `Column` component, the element with the part name `component` would have the class `col-span-6` set. To see the component part names for each component, please see the individual component page. 

In some cases, you may have a lot of repeated class names, in this case, you can extract them to base classes above the `parts` object. Taking the `Column` component example above, let's say you'd like prop values `"3"` and `"6"` to be flexbox and have centered content you may do something like this:

```ts 
// Base Classes
const baseFlexClasses = 'flex items-center justify-center'

export default function ColumnLocal(): Column {
  const parts: Parts = {
    component: {
      span: {
        default: ["col-span-12"],
        '6': [baseFlexClasses, "col-span-6"],
        '3': [baseFlexClasses, "col-span-6"]
      }
    }
  }
}
```

### DynamicParts

In some cases component `parts` may take advantage of the `DynamicParts` type over the `Parts` type - `DynamicParts` is used when specific package level props can make a significant difference in the way a component may be displayed, allowing for different default classes, etc. `DynamicParts` still rely on locally defined class props but allows for different meanings across different types. An example of this is `FormInput` and `FormGroup`, each of these has a dynamic part controlled by the input `type prop`. `DynamicParts` should always have a `default` property whose value is equal to a regular `Parts` type, this will cover all input type props unless a property key exists on `DynamicParts` matching an allowed `type prop`.

In the following example of how a `FormInputs` `DynamicParts` may be set up, all FormInputs will have a `border` class:

```ts
export default function FormInputLocal(): FormInput {
  const parts: DynamicParts = {
    default: {
      component: {
        style: {
          default: ["border"],
        },
      },
    },
  };

  return {
    parts,
  };
}
```

Sometimes though, we may want a different style for specific input types. In the following example, instead of a border, `file` type inputs would have a `bg-red` class, while every other type would continue to have a `border` class:

```ts
export default function FormInputLocal(): FormInput {
  const parts: DynamicParts = {
    file: {
      component: {
        style: {
          default: ["bg-red"],
        },
      },
    },
    default: {
      component: {
        style: {
          default: ["border"],
        },
      },
    },
  };

  return {
    parts,
  };
}
```

In most cases for `DynamicParts`, `default` is the only property key that needs to be set for each class prop key.