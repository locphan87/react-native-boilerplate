# Utility functions

We often have JavaScript functions which are used in several places of our project.

Best approach is to store all these functions in a shared JavaScript file, included when necessary.

## Code structure

Naming convention:
* Utility function `<UTILITY_NAME>.util.js`
* Test `<UTILITY_NAME>.util.test.js`

```
./src/utils/
├── __tests__
│   ├── common.util.test.js
│   └── platform.util.test.js
├── common.util.js
├── platform.util.js
```
