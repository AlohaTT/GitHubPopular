import { createAppContainer, createStackNavigator, createSwitchNavigator, } from 'react-navigation';
import HomePage from '../page/HomePage';
import WelcomePage from '../page/WelcomePage';
import DetailPage from '../page/DetailPage';

const WelcomeNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions:{
      header:null,
    },
  },
  Detail:{
    screen: DetailPage,
    navigationOptions:{

    },
  },
});

const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeNavigator,
  Home: HomeNavigator,
});



export default createAppContainer(AppNavigator);