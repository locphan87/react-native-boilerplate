# Modules

Main application features

Traditionally, developers structured their React applications by type. This means they had folders like `actions/`, `components/`, `containers/`, etc.

While this works fine for examples, once you have hundreds or potentially thousands of components, development becomes very hard. To add a feature, you would have to search for the correct file in half a dozen different folders with thousands of files. This would quickly become tedious, and confidence in the code base would wane.

Instead of grouping the files of your application by type, group them by feature! That is, put all files related to one feature in the same folder.

Let’s look at what the folder structure would look like for our `GoalList` example:

## Code structure

Naming convention:
* Screen component (stateful) `<MODULE_NAME>.screen.js`
* State selector for screen component `<MODULE_NAME>.selector.js`
* Event handlers for screen component `<MODULE_NAME>.handler.js`
* Module's reducer `<MODULE_NAME>.reducer.js`
* API requests `<MODULE_NAME>.api.js`
* UI view component `<MODULE_NAME>.view.js`
* Form component `<MODULE_NAME>.form.js`
* Style `<MODULE_NAME>.<UI_TYPE>.style.js`
* Test `<MODULE_NAME>.<TEST_TYPE>.test.js`

```
UI_TYPE = component | view
TEST_TYPE = component
  | view
  | api
  | form
  | handler
```

```
./src/modules/GoalList/
├── GoalList.form.js
├── GoalList.form.style.js
├── GoalList.api.js
├── GoalList.handler.js
├── GoalList.reducer.js
├── GoalList.screen.js
├── GoalList.selector.js
├── GoalList.view.js
├── GoalList.view.style.js
└── MyModuleComponent1
└── MyModuleComponent2
└── __test__
```

Developers working on this application would need to go into only a single folder to work on something. And they would need to create only a single folder to add a new feature. Renaming is easy with find and replace, and hundreds of developers could work on the same application at once without causing any conflicts!

Note:
* We have many files in this directory so it's reasonable to have a separate test folder.
* It's common that a view component define and use smaller components in the same module (organized in separate folders, i.e `MyModuleComponent1` and `MyModuleComponent2`)
