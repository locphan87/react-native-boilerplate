# Deployment

## Publish to Expo

Login to Expo

```
$ exp login
$ exp whoami // check the current user
```

We need to specify the environment and the Expo channel for deployment

```
$ ENV=dev CHANNEL=dev yarn deploy
```

There is a post publish hook that we can benefit to do extra stuff:
* notify the new build on Slack
* build sourcemaps for error reporting service (i.e Sentry)
* ...

## Build a standalone app

If you decide to eject Expo (to deal with native libraries/code), you would need to build your own custom deploy scripts for it.

Normally, there are 2 separate scripts for iOS and Android. Example:

```
$ ENV=dev CHANNEL=dev yarn deploy:android
$ ENV=dev CHANNEL=dev APPLE_USER_NAME=$USER_NAME PASSWORD=$PASSWORD yarn deploy:ios
```
