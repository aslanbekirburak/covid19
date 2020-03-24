/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import HomePage from '../HomePage';
import Welcome from '../Welcome';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Home: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'Welcome',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        width: '0%',
        height: 20,
        paddingTop: 20,
        backgroundColor: '#1b1237',
      },
      headerTintColor: '#1b1237',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
