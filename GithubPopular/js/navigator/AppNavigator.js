import { createAppContainer, createStackNavigator, createSwitchNavigator, } from 'react-navigation';
import HomePage from '../page/HomePage';
import WelcomePage from '../page/WelcomePage';

const AppNavigator = createSwitchNavigator({
  Welcome:{
    screen:WelcomePage,
  },
  Home:{
    screen:HomePage,
  },
});

export default createAppContainer(AppNavigator);