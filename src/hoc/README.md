# Higher order components

A higher-order component ([HOC](https://reactjs.org/docs/higher-order-components.html)) is an advanced technique in React for reusing component logic.

Concretely, a higher-order component is a function that takes a component and returns a new component.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

## Code structure

Naming convention:
* HOC `<HOC_NAME>.hoc.js`
* Test `<HOC_NAME>.hoc.test.js`

```
./src/hoc/withUpdating
├── __snapshots__
│   └── withUpdating.hoc.test.js.snap
├── withUpdating.hoc.js
└── withUpdating.hoc.test.js
```
