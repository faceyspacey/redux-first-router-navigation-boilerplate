# Redux-First Router Navigation Boilerplate

To get this to work you will need to install React Native Debugger:

https://github.com/jhen0409/react-native-debugger

## Installation

```
git clone https://github.com/faceyspacey/redux-first-router-navigation-boilerplate
cd redux-first-router-navigation-boilerplate
yarn
react-native run-ios

#once the simulator opens and the app is built, kill the packager terminal

yarn start

#React Native Debugger will now open while the app starts.
#If you keep the simulator + debugger open, you can just do yarn start anytime you want to play with it again
```

## What To Do
- examine index.ios.js -- *URL is set via Linking to kick off the app (the way it's done is unique)*
- examine src/index.js -- *history, store, and app are constructed*
- examine src/configureStore.js -- *the redux-first-router stuff, keep an eye on this file*
- examine the reducers -- *they are strikingly straightforward yet effective*
- examine the components -- *particularly* ***Navigators:*** *Stack.js, Tabs.js, Drawer.js, and secondly* ***Screens:*** *RecentChats.js, Notfications.js, Chats.js.* ***In that order.***

At one point I got it working with deep linking in Android, but haven't visited that in a while. So assume it's iOS only.
