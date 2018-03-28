# Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Consider to only put **common** components in this directory.
Otherwise, it should belong to a specific module.

## Code structure

Naming convention:
* Component: `<COMPONENT_NAME>.component.js`
* Component styles: `<COMPONENT_NAME>.component.style.js`
* Snapshot and behavior tests: `<COMPONENT_NAME>.component.test.js`

```
./src/components/LoadingMask/
├── LoadingMask.component.js
├── LoadingMask.component.style.js
├── LoadingMask.component.test.js
└── __snapshots__
    └── LoadingMask.component.test.js.snap
```

There is no too much files in this directory. So it's much nicer to co-locate tests with sources
