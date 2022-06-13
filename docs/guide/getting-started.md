# Getting started with Barebones
::: warning
Please note this documentation is in it's first draft.These getting started instructions currently only include the current default which is a Tailwind based theme.

This getting started guide will assume you are in a Vue 3 / Nuxt 3 application and have Tailwind JIT installed.
:::

## Add Barebones to a Vue 3 project

Add Barebones to your project with the by adding `@wearethreebears/barebones`, either via Yarn:

```
yarn add @wearethreebears/barebones
```
Or via NPM:
```
npm install @wearethreebears/barebones
```

Add the aliases to your paths in your `tsconfig.json` file:

```json
{
    //
    "@barebones/*": [
        "node_modules/@wearethreebears/barebones/src/*"
    ],
    "@barebones-local/*": [
        "barebones/*"
    ],
    //
}
```

Add the aliases to your aliases in your `vite.config.js` file:

```ts
{
    //
    "@barebones": fileURLToPath(
        new URL(
        "./node_modules/@wearethreebears/barebones/src",
        import.meta.url
        )
    ),
    "@barebones-local": fileURLToPath(
        new URL("./barebones", import.meta.url)
    ),
    //
}
```

You can then import components to Vue with the following pattern:
```ts
import Bones<ComponentName> from "@barebones/components/<ComponentName>/<ComponentName>.vue";
```

Where `<ComponentName>` is the name of the component you'd like to import.


## Add Barebones to a Nuxt 3 project

Add Barebones to your project with the by adding `@wearethreebears/barebones`, either via Yarn:

```
yarn add @wearethreebears/barebones
```
Or via NPM:
```
npm install @wearethreebears/barebones
```

Add the aliases to your `tsconfig.json` file:

```json
{
    //
    "compilerOptions": {
        "paths": {
        "@/*": [
            "./*"
        ],
        "@barebones/*": [
            "node_modules/@wearethreebears/barebones/src/*"
        ],
        "@barebones-local/*": [
            "barebones/*"
        ],
        }
    }
    //
}
```

Add the aliases to your `nuxt.config.ts` file:

```ts
import { resolve } from 'path'

export default defineNuxtConfig({
    {
        //
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@barebones": fileURLToPath(new URL("./node_modules/@wearethreebears/barebones/src", import.meta.url)),
            "@barebones-local": fileURLToPath(new URL("./barebones", import.meta.url)),
        },
        //
    },
})
```

Auto import the components (By default this will prefix all Barebones components with `Bones`):

```ts
export default defineNuxtConfig({
    //
    buildModules: ['@wearethreebears/barebones/nuxt'],
    //
})
```

Copy the local configuration files:
```
cp -R  node_modules/@wearethreebears/barebones/src/local ./barebones
```
::: warning
This command will still be replaced by a theme command.
:::

