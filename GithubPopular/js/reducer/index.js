import { combineReducers, } from 'redux';
import { navReducer, } from '../navigator/AppNavigator';
import themeReducer from './theme/index';

export default combineReducers({
  nav:navReducer,
  theme: themeReducer,
});