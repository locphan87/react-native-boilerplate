# Testing

## Guidelines

* Place your test files next to the tested modules using `*.test.js` naming convention, like `componentName.component.test.js`.

> Why: You don't want to dig through a folder structure to find a unit test.

* Put your additional test files into a separate test folder to avoid confusion.

> Why: Some test files don't particularly relate to any specific implementation file. You have to put it in a folder that is most likely to be found by other developers: `__test__` folder.

* Write testable code, avoid side effects, extract side effects, write pure functions

> Why: You want to test a business logic as separate units. You have to "minimize the impact of randomness and nondeterministic processes on the reliability of your code".

> A pure function is a function that always returns the same output for the same input. Conversely, an impure function is one that may have side effects or depends on conditions from the outside to produce a value. That makes it less predictable.

* Run tests locally before making any pull requests to develop.

> Why: You don't want to be the one who caused production-ready branch build to fail. Run your tests after your rebase and before pushing your feature-branch to a remote repository.

## Recipes

### Render multiple snapshots on a React component

```js
import { testSnapshots } from '../../../../utils/test.util'

import TextInput from './TextInput.component'

const props = {}

describe('Form Inputs - TextInput', () => {
  testSnapshots(TextInput, [
    {
      props,
      description: 'basic render'
    },
    {
      props: {
        ...props,
        fieldProps: {
          ...props.fieldProps,
          values: { title: '' },
          touched: { title: true },
          errors: { title: 'Title is required' }
        }
      },
      description: 'should render an error'
    }
  ])
})
```

### Render a single snapshot on a React element

```js
import { singleSnapTest } from '../../../../utils/test.util'

describe('sub render', () => {
  const List = wrapper.find('FlatList')
  const Item = List.props().renderItem({ item })
  singleSnapTest(Item, 'render goal item correctly')
})
```
