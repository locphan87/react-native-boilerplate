[![CircleCI](https://circleci.com/gh/phanhoangloc/react-native-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/phanhoangloc/react-native-boilerplate/tree/master) [![codecov](https://codecov.io/gh/phanhoangloc/react-native-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/phanhoangloc/react-native-boilerplate) [![Maintainability](https://api.codeclimate.com/v1/badges/0a4de6536aa865df920b/maintainability)](https://codeclimate.com/github/phanhoangloc/react-native-boilerplate/maintainability)

Functional React Native Boilerplate
> A feature oriented react native boilerplate, bootstrapped by [CRNA](https://github.com/react-community/create-react-native-app), using functional patterns and tools

- [React Native Boilerplate](#react-native-boilerplate)
  - [tltr;](#tltr)
  - [Contents](#contents)
    - [Application Blueprint](#application-blueprint)
    - [Testing Setup](#testing-setup)
    - [Dev tools](#dev-tools)
    - [Roadmap](#roadmap)
  - [Getting started](#getting-started)
  - [Development workflow](#development-workflow)
    - [Run application](#run-application)
      - [Start the application in iOS simulator](#start-the-application-in-ios-simulator)
      - [Start the application in Android simulator](#start-the-application-in-android-simulator)
    - [Test application](#test-application)
      - [Run unit tests](#run-unit-tests)
      - [Run tests every time code changes](#run-tests-every-time-code-changes)
      - [Generate code coverage report](#generate-code-coverage-report)
  - [Debugging](#debugging)
  - [Deployment](#deployment)
  - [Licensing](#licensing)

## tltr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```
git clone https://github.com/phanhoangloc/react-native-boilerplate
cd react-native-boilerplate
yarn install
yarn start
```

For further setup instructions please see our [Getting Started](#getting-started) section.

## Contents

### Application Blueprint

* Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* Modular and well-documented structure for application code
* Easy to build native apps with [Expo](https://expo.io/)
* [Redux](http://redux.js.org/) for safe and reasonable state management
* [Redux promise middleware](https://github.com/pburtchaell/redux-promise-middleware) and [Redux thunk](https://github.com/reduxjs/redux-thunk) for side effects
* Painless React forms with [formik](https://github.com/jaredpalmer/formik)
* [React Navigation](https://reactnavigation.org/) for awesome navigation with 60fps transitions
* [Flow](http://flow.org/) for static type checking
* [Ramda](https://github.com/ramda/ramda) and [Ramda Adjunct](https://github.com/char0n/ramda-adjunct) for functional Javascript
* [Recompose](https://github.com/acdlite/recompose) for building higher order components
* [React Native Elements](https://react-native-training.github.io/react-native-elements/) for cross platform UI toolkit
* [Glamorous Native](https://github.com/robinpowered/glamorous-native) for styling React Native components
* Clean and testable service layer for interacting with RESTful APIs
* :star: Multi-environment configuration (local, dev, production,...) for iOS and Android
* :star: Built-in error handling, loading, updating and customizable screens

### Testing Setup

* [Jest](https://facebook.github.io/jest/) for unit testing application code and providing coverage information.
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components

### Dev tools

* [ESLint](https://eslint.org/) for a fully pluggable JS linter
* [Json Server](https://github.com/typicode/json-server) for a full fake REST API with zero configuration
* [Prettier](https://github.com/prettier/prettier) as an opinionated code formatter

### Roadmap

* **TODO** Crash reporting
* **TODO** Feature flags?

## Getting started

To build your own app on top of the Starter Kit, fork or mirror this repository.

Once you have the code downloaded, follow the **[Setup guide](docs/SETUP.md)** to get started.

## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

To learn how to structure your application, read **[Code structure principles](docs/STRUCTURE.md)** for more details.

### Run application
#### Start the application (required step)
```
$ yarn start
```

#### Open the application in iOS simulator
```
$ yarn ios
```

#### Open the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ yarn android
```

### Test application
#### Run unit tests
```
$ yarn test
```

#### Run tests every time code changes
```
$ yarn test:watch
```

#### Generate code coverage report
```
$ yarn test:coverage
```
Check out https://pyco-group.gitlab.io/genvita/ to view the full coverage report on the `master` branch

##### Run tests every time code changes and generate code coverage report
```
$ yarn test:wc
```

It's quite slow to watch file changes and then generate code coverage report. Despite that, it's very useful to run it on isolated/small test cases

For more information:
* Read the **[Testing guide](docs/TESTING.md)** to know more about writing tests.
* Read the **[Coding convention](docs/CONVENTION.md)** for more details about code style.

## Debugging

For standard debugging select *Debug JS Remotely* from the React Native Development context menu (To open the context menu, press *CMD+D* in iOS or *D+D* in Android). This will open a new Chrome tab under [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui) and prints all actions to the console.

For advanced debugging under **macOS** we suggest using the standalone [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which is based on the official debugger of React Native.
It includes the React Inspector and Redux DevTools so you can inspect React views and get a detailed history of the Redux state.

You can install it via [brew](https://brew.sh/) and run it as a standalone app:

```
$ brew update && brew cask install react-native-debugger
```

Open React Native Debugger on a different port (i.e 19001)
```
$ open "rndebugger://set-debugger-loc?host=localhost&port=19001"
```

> Note: Make sure you close all active chrome debugger tabs and then restart the debugger from the React Native Development context menu.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** to learn how to deploy the application to test devices, app stores, and how to use Code Push to push updates to your users immediately.

## Licensing

MIT
