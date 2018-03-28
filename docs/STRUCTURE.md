# Code Structure Principles

## Directory structure

* No duplicate file name in the whole application. Every file need to have a suffix to explain its type

> Why: It's easier to search for a file and reduce confusing of same file names

```
./src/modules/GoalList/
├── GoalList.api.js
├── GoalList.handler.js
├── GoalList.reducer.js
├── GoalList.screen.js
├── GoalList.selector.js
├── GoalList.view.js
```

* Organize your files around product features / pages / components, not roles. Also, place your test files next to their implementation.

> Why: Instead of a long list of files, you will create small modules that encapsulate one responsibility including its test and so on. It gets much easier to navigate through and things can be found at a glance.

* Put your additional test files to a separate test folder to avoid confusion.

* Separate directory for each component, module, higher order component,...

> Why: It's easier to extend and organize files. Make a change on a component won't affect to the structure of its parent directory

```
./src/components/
├── GoalItem
├── GoalList
├── LoadingMask
├── Progress
└── Styled
```

* Only use `index.js` for indexing (no logic)

> Why: Using `index.js` make it more comfortable to import files in a deep structure. However, putting logic code in it is an anti-pattern

* Every main directory has a README file

> Why: Have no clue about how a directory is organized? What's the naming convention? How do things work together? Add a README to explain them

Check out `README.md` file in every main directory for more information about its structure

## File structure

* Put all `export` at the end

> Why: Randomly export variables, types, classes,...is hard to keep track of what have been exported, especially in a large file

```js
// thousands lines of code

export { myVar, myClass }
export type { myModel, myType }
export default myModule
```
