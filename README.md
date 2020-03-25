# Cocktail-Finder
This application serves as search for varius cocktails provided by a public API. It can run on android and ios devices

## Previews Configuration
You need to have installed for:
| Name                  | Platform              | Required?  | Description  |
| :---------------------|:----------------------|:-----------|:-------------|
| Android Studio        | android               | yes        | run emulator |
| Xcode                 | ios                   | yes        | run emulator |
| node                  | both                  | yes        | node packages|
| yarn                  | both                  | yes        | yarn manager |
| cocoapods             | ios                   | yes        | react-native ios libraries|
| jdk                   | android               | yes        | android java libraries|


## Installation

install dependencies

```bash
yarn
```

## run proyect

### start android only

```bash
yarn android
```

### start ios only

```bash
yarn ios
```

### start on both platforms

```bash
yarn start
```

## Libraries

### Dependencies
| Name                    | Version              | Description  |
| :-----------------------|:---------------------|:-------------|
| react-navigation        | 4.0.10               | navigate between app screens |
| react-native-splash-screen | 3.2.0             | app splash scree |
| react-native-vector-icons | 6.6.0              | app icons |
| redux                  | 4.0.5                 | app state managment |
| redux-saga             | 1.1.3                 | app asyncronius actions |
| styled-components      | 5.0.0    | app styles for components and unification |

### Dev Dependencies
| Name                    | Version              | Description  |
| :-----------------------|:---------------------|:-------------|
| eslint       | 6               | linter managment |
| prop-types | 15.7.2             | handlers types for components props |
| react-native-eject | 0.1.2              | auto generates ios and android folder |

## Troubleshooting
If of any case you loose the android/ios folders, you can get it back running the following command

```bash
yarn react-native eject
```