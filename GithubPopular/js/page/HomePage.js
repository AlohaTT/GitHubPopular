import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { createAppContainer, createBottomTabNavigator, } from 'react-navigation';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import { MaterialIcons, Ionicons, } from 'react-native-vector-icons';

const HomeTab = createBottomTabNavigator({
  Popular: {
    screen: PopularPage,
    defaultNavigationOptions: {
      showLabel: true,
      tabBarLabel: '最热',
      tabBarIcon: ({ tintColor, focused, }) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor, }}
        />
      ),
    },
  },
  Trending: {
    screen: TrendingPage,
    defaultNavigationOptions: {
      tabBarLabel: '趋势',
    },
  },
  Favorite: {
    screen: FavoritePage,
    defaultNavigationOptions: {
      tabBarLabel: '收藏',
    },
  },
  My: {
    screen: MyPage,
    defaultNavigationOptions: {
      tabBarLabel: '我的',
    },
  },
});


export default class HomePage extends Component {
  render() {
    const HomeContainer = createAppContainer(HomeTab);
    return <HomeContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
