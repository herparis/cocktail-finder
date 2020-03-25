import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { SCREENS } from '../constants'
import { DetailsScreen, FinderScreen, HomeScreen } from './screens'

const ScreensNavigator = createStackNavigator(
  {
    HomeScreen,
    FinderScreen,
    DetailsScreen
  },
  {
    initialRouteName: SCREENS.HOME_SCREEN,
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
)

const Screens = createAppContainer(ScreensNavigator)

export default Screens