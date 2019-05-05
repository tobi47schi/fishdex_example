// noch nicht eingesetzt!! (4.5.19 13:19)

import {
  createStackNavigator
}
from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
});

export default AppNavigator;
