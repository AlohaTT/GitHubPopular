import { createAppContainer, createStackNavigator, createSwitchNavigator, } from 'react-navigation';
import HomePage from '../page/HomePage';
import WelcomePage from '../page/WelcomePage';
import DetailPage from '../page/DetailPage';
import { connect, } from 'react-redux';
import { createNavigationReducer, createReduxContainer, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';

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
    navigationOptions: {
      header: null,
    },
  },
  Detail: {
    screen: DetailPage,
    navigationOptions: {

    },
  },
});

const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeNavigator,
  Home: HomeNavigator,
});

export const navReducer = createNavigationReducer(AppNavigator);

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppContainer = createReduxContainer(AppNavigator);

export default connect(mapStateToProps)(AppContainer);