# Setting up the Starter Kit

## Requirements

Before you get started, make sure you have the following dependencies installed on your machine:

- [NodeJS](https://nodejs.org) `>=8` with `yarn` or `npm 5`.
- Latest React Native CLI

```
$ npm install -g react-native-cli
```

- [Expo dev tools](https://expo.io/tools)

## Installation

Install dependencies from NPM

```
$ yarn install
```

Create a blank configuration file

```
$ cp env.example.js env.js
```

Create a sample data

```
$ cp data.json.example data.json
```

## Running the local server

```
$ yarn server
```

## Running the iOS application

1. Install Xcode for iOS development (download from Mac App Store)

2. Build the app and run the simulator:

```
$ yarn ios
```

## Running the Android application

More details here: [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

1. Install latest JDK
2. Install the Android SDK

```
$ brew install android-sdk
```

3. Set ANDROID_HOME environment variable in .bashrc, .zshrc or similar:

```
$ export ANDROID_HOME=/usr/local/opt/android-sdk
```

4. Start Android SDK Manager

```
$ android
```

5. Add SDK tools via Android SDK manager

- Android SDK tools
- Android SDK Platform-tools
- Android SDK Build-tools (**Important**: Rev. 23.0.1)
- SDK Platform
- Intel x86 Atom_64 System Image
- Intel x86 Atom System Image
- Android Support Repository
- Android Support Library
- Intel x86 Emulator Accelerator (HAXM installer)

6. Configure and install hardware acceleration

```
$ open /usr/local/opt/android-sdk/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_<version>.dmg
```

7. Open Android Virtual Device manager

```
$ android avd
```

8. Add new virtual device

- name: reactnative
- Device: Nexus 5
- Target: Android 6 - API Level 23
- CBU: Intel Atom x86
- check Use Host GPU

9. Build app and run emulator:

```
$ yarn android
```

## Running the application on Expo

We should have XDE installed on our development machine and the Expo client on an iOS or Android physical device or emulator.

Refer to [Working with Expo](https://docs.expo.io/versions/latest/workflow/) for more information
