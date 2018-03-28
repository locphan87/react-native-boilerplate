# Code convention

## General

Check out [Clean code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) to learn basic principles

* Use ESLint - Pluggable JavaScript linter to enforce code style.

* We use [Universe](https://github.com/expo/eslint-config-universe) Style Guide for JavaScript.

* We use Flow type style check rules for ESLint when using FlowType.

> Why: Flow introduces few syntaxes that also need to follow certain code style and be checked.

* Use .eslintignore to exclude files or folders from code style checks.

> Why: You don't have to pollute your code with eslint-disable comments whenever you need to exclude a couple of files from style checking.

* Remove any of your eslint disable comments before making a Pull Request.

> Why: It's normal to disable style check while working on a code block to focus more on the logic. Just remember to remove those eslint-disable comments and follow the rules.

* Depending on the size of the task use `//TODO`: comments or open a ticket.

> Why: So then you can remind yourself and others about a small task (like refactoring a function or updating a comment). For larger tasks use `//TODO(#3456)` which is enforced by a lint rule and the number is an open ticket.

* Always comment and keep them relevant as code changes. Remove commented blocks of code.

> Why: Your code should be as readable as possible, you should get rid of anything distracting. If you refactored a function, don't just comment out the old one, remove it.

* Avoid irrelevant or funny comments, logs or naming.

> Why: While your build process may(should) get rid of them, sometimes your source code may get handed over to another company/client and they may not share the same banter.

* Make your names search-able with meaningful distinctions avoid shortened names. For functions use long, descriptive names. A function name should be a verb or a verb phrase, and it needs to communicate its intention.

> Why: It makes it more natural to read the source code.

* Organize your functions in a file according to the step-down rule. Higher level functions should be on top and lower levels below.

> Why: It makes it more natural to read the source code.

* We use Prettier with a precommit hook to format code.

> Why: While `prettier` itself can be very powerful, it's not very productive to run it simply as an npm task alone each time to format code. This is where `lint-staged` (and `husky`) come into play.

## ESLint rules

Check out [ESLint rules](.eslintrc.js) to learn about detailed rules applied to the project

## Flow
refer to [flow-guide](https://github.com/ryyppy/flow-guide/blob/master/styleguide/README.md) to learn basic rules

* **Generic** type definitions on the top of the file (after `import` statements)

> Why: It's hard to find type definitions that are randomly defined in the module

* Complex function definition on top of the function

> Why: **Inline** function definitions are hard to read and maintenance

```js
type SimulatePendingFn = (
  asyncFns: string[],
  updateState?: string
) => GenericProps => GenericProps
const simulatePending: SimulatePendingFn = (
  asyncFns,
  updateState = 'setUpdating'
) => props => {}
```
