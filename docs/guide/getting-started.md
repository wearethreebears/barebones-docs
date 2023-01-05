::: warning
While the documentation is fairly complete, it is still in first draft.
:::

# Getting started with Barebones
::: warning
This getting started guide will assume you have already set up  and are in a Vue 3 / Nuxt 3 application.
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

Next, you will need to add the local configuration files using an NPX command. You can choose a blank canvas configuration, which will just contain the boilerplate for you to start adding your own props and classes or you can choose from one of the pre-made [theme](/guide/themes.html) configurations as a starting point.

To start with a blank canvas run:

```
npx @wearethreebears/barebones theme blank
```

To use a pre-made theme you can run a variation of the following command:

```
npx @wearethreebears/barebones theme <cssLibrary>/<themeName>
```

Where `<cssLibrary>` is the name of the library (e.g. Tailwind, Vanilla) and `<themeName>` is a theme within that library. [See all available themes here](/guide/themes.html).

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

Next, you will need to add the local configuration files using an NPX command. You can choose a blank canvas configuration, which will just contain the boilerplate for you to start adding your own props and classes or you can choose from one of the pre-made [theme](/guide/themes.html) configurations as a starting point.

To start with a blank canvas run:

```
npx @wearethreebears/barebones theme blank
```

To use a pre-made theme you can run a variation of the following command:

```
npx @wearethreebears/barebones theme <cssLibrary>/<themeName>
```

Where `<cssLibrary>` is the name of the library (e.g. Tailwind, Vanilla) and `<themeName>` is a theme within that library. [See all available themes here](/guide/themes.html).

