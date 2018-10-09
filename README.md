[![CircleCI](https://circleci.com/gh/phanhoangloc/react-native-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/phanhoangloc/react-native-boilerplate/tree/master) [![codecov](https://codecov.io/gh/phanhoangloc/react-native-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/phanhoangloc/react-native-boilerplate) [![Maintainability](https://api.codeclimate.com/v1/badges/0a4de6536aa865df920b/maintainability)](https://codeclimate.com/github/phanhoangloc/react-native-boilerplate/maintainability)

# React Native Boilerplate
> A feature-oriented react native boilerplate using functional patterns and tools

Table of Contents
=================

* [tltr;](#tltr)
* [Architecture](#architecture)
* [Getting started](#getting-started)
   * [Requirements](#requirements)
   * [Installation](#installation)
* [Development workflow](#development-workflow)
   * [Run the app](#run-the-app)
   * [Test the app](#test-the-app)
* [Debugging](#debugging)
* [Deployment](#deployment)
   * [Login to Expo](#login-to-expo)
   * [Publish to Expo](#publish-to-expo)
   * [Make a new release](#make-a-new-release)
* [Licensing](#licensing)


## tltr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```bash
$ git clone https://github.com/phanhoangloc/react-native-boilerplate
$ cd react-native-ts
$ yarn install
$ yarn start
```

## Architecture

[Details](https://github.com/phanhoangloc/react-native-architecture)

Please note that in this boilerplate, we use JavaScript + Flow instead of TypeScript

## Getting started

### Requirements

Before you get started, make sure you have the following dependencies installed on your machine:

* NodeJS >= 8.11 with yarn and npm 5
* Latest React Native CLI

```bash
$ npm install -g react-native-cli
```

* [Expo CLI](https://docs.expo.io/versions/latest/introduction/installation#local-development-tool-expo-cli)

```bash
$ npm install -g expo-cli
```

* [Expo client for iOS simulator](https://docs.expo.io/versions/latest/introduction/installation#ios-simulator)
* [Expo client for Android emulator](https://docs.expo.io/versions/latest/introduction/installation#android-emulator)

### Installation

* Install dependencies

```bash
$ yarn install
```

* Create configuration files

```bash
$ yarn setup
```

## Development workflow

### Run the app

* Start a local server for your app

```bash
$ yarn start
```

* Opens your app in Expo in a currently running iOS simulator on your computer

```bash
$ yarn ios
```

* Opens your app in Expo on a connected Android device

```bash
$ yarn android
```

### Test the app

* Run unit tests

```bash
$ yarn test
```

* Run tests every time code changes

```bash
$ yarn test:watch
```

* Generate code coverage report

```bash
$ yarn test:coverage
```

* Run tests every time code changes and generate code coverage report

```bash
$ yarn test:wc
```

It's quite slow to watch file changes and then generate code coverage report. Despite that, it's useful to run it on isolated/small test cases

## Debugging

For standard debugging select *Debug JS Remotely* from the React Native Development context menu (To open the context menu, press *CMD+D* in iOS or *D+D* in Android). This will open a new Chrome tab under [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui) and prints all actions to the console.

For advanced debugging under **MacOS** we suggest using the standalone [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which is based on the official debugger of React Native.
It includes the React Inspector and Redux DevTools so you can inspect React views and get a detailed history of the Redux state.

You can install it via [brew](https://brew.sh/) and run it as a standalone app:

```bash
$ brew update && brew cask install react-native-debugger
```

Open React Native Debugger on a different port (i.e 19002)

```bash
$ open "rndebugger://set-debugger-loc?host=localhost&port=19002"
```

> Note: Make sure you close all active chrome debugger tabs and then restart the debugger from the React Native Development context menu.

## Deployment

### Login to Expo

Make sure to login to the **correct** account

```bash
$ expo login
$ expo whoami // check the current user
```

### Publish to Expo

We need to specify the environment and the [release channel](https://docs.expo.io/versions/latest/distribution/release-channels) for deployment

Publish to staging

```bash
$ ENV=staging CHANNEL=staging yarn deploy
```

Publish to production (we use the default channel for production)

```bash
$ ENV=production yarn deploy
```

There is a post publish hook that we can benefit to do extra stuff:

* notify the new build on Slack
* build and upload source maps for an error reporting service (i.e Sentry)
* ...

### Make a new release

We show the build info directly in the app: app version, build time, environment, etc. Here are the steps to increase the app version when deploying:

* Open `app.json` in the target environment. Example: You are deploying to staging, the file would be `./src/environments/staging/app.json`
* Update the key `expo.version`
* Commit the change and push it to the repository

## Licensing

MIT
