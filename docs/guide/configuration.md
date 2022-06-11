# Configuration

## Overview

Configuring Barebones components is simple. Each component will have 2 associated local files in your project, `.props.ts` and `.parts.ts`. These files will control the component props and component part styles respectivley.

## .props.ts
`.props.ts` files determine the props you'd like to pass to you components, this allows you to shape the way you use component styles in a way that works for you. A simple example of what a components `.props.ts` could look like could be a `Column` component, a `Column` should `span` `x` amount of columns in a `Grid`, in the following example, whenever you used the `Column` component, you'd pass `x` to the prop `span`:

```ts
export const classProps: ClassProps = {
  span: {
    type: [String, Array] as PropType<string | string[]>,
    default: "default",
  },
};
```

In some cases, you or your team my prefer to change prop names, for example you may choose to change `span` in the above example to`cover`, in which case, you can change that in your local `Column` `.props.ts` file:

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

`.parts.ts` files are used to map props to CSS files. `Parts` refers to the elements that make up a component. Every component has a root element, with the part name `component`, each individual component then be made up of several other component parts, depending on the complexity. A simple example of what a `.parts.ts` file could look like could be a `Column` component `.parts.ts` file. A column has one component part, the root element, called `component`:

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

First level property keys in the `parts` object refer to the component parts in any given component, the second level refers to a prop key defined in the components `.props.ts` file. In the example above, the `Column` component has a prop called `span`. Third level properties are where the class mapping for each prop on each component part happens. In the above example, if you were to pass the value `"6"` to the `span` prop on the `Column` component, the element with the part name `component` would have the class `col-span-6` set. To see the component part names for each component, please see the individual component page. 

In some cases you may have a lot of repeated class names, in this case you can extract them to base classes above the `parts` object. Taking the `Column` component example above, let's say you'd like prop values `"3"` and `"6"` to be flexbox and have centered content you may do something like this:

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