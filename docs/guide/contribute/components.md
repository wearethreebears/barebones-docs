# Contribute components 

## Overview

Please note that not all new components will be added to the library. New components should follow the same patterns as current components, we plan to put together a more specific guide on this.

## Scaffolding new components

To help with boilerplate when creating new components, Barebones comes with a Scaffolding command. To create a new component, in the root directory run the following command:

```
yarn component:build ComponentName
```

Where `ComponentName` is your desired component name.

## Removing an exisiting compomnent

As well as providing a scaffolding command for creating new components, Barebones also offers a destory command. To remove an existing component, in the root directory run the following command:

```
yarn component:destroy ComponentName
```

Where `ComponentName` the name of the component you'd like to remove.