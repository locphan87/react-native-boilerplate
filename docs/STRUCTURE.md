# Code Structure

## Principles

* No duplicate file name in the whole application. Every file has a suffix to explain its type
* Only use `index.js` for indexing (no logic) and easier import

## Source `src`

```
./src
├── components // reusable components
├── configs    // config files
├── constants  // app constants
├── hoc        // higher order components
├── i18n       // translations for multi languages
├── modules    // main app features
├── redux      // store setup and root reducer
├── services   // external services
├── themes     // themes, colors, fonts,...
├── types      // reusable type definitions
└── utils      // common utils
```

### Components

* List: Every component has its own directory

```
./src/components/
├── GoalItem
├── GoalList
├── LoadingMask
├── Progress
└── Styled
```

* Detail

```
./src/components/LoadingMask/
├── LoadingMask.component.js       // component code
├── LoadingMask.component.style.js // styles
├── LoadingMask.component.test.js  // test (snapshots + behaviors)
└── __snapshots__
    └── LoadingMask.component.test.js.snap
```

In theory, there is no too much files in this directory. So it's much nicer to co-locate tests with sources

### Modules

* A basic module

```
./src/modules/GoalList/
├── GoalList.form.js       // form component
├── GoalList.form.style.js // form styles
├── GoalList.api.js        // API calls
├── GoalList.handler.js    // main event handlers
├── GoalList.reducer.js    // module reducer
├── GoalList.screen.js     // screen configs: navigation, state, events,...
├── GoalList.selector.js   // state selector (redux)
├── GoalList.view.js       // UI component to render layout on the screen
├── GoalList.view.style.js // UI styles
└── __test__               // test files
```

We have more files in this directory so it's reasonable to have a separate test folder
