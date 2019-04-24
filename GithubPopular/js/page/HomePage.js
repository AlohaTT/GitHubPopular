import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { createAppContainer, createBottomTabNavigator, } from 'react-navigation';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeTab = createBottomTabNavigator({
  Popular: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({ tintColor, focused, }) => (  //tintColor -- 这个是  状态切换的时候给图标不同的颜色
        <MaterialIcons
          name="whatshot"
          size={26}
          style={{ color: tintColor, }}
        />
      ),
    },
  },
  Trending: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({ tintColor, focused, }) => (  //tintColor -- 这个是  状态切换的时候给图标不同的颜色
        <Ionicons
          name="md-trending-up"
          size={26}
          style={{ color: tintColor, }}
        />
      ),
    },
  },
  Favorite: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({ tintColor, focused, }) => (  //tintColor -- 这个是  状态切换的时候给图标不同的颜色
        <MaterialIcons
          name="favorite"
          size={26}
          style={{ color: tintColor, }}
        />
      ),
    },
  },
  My: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused, }) => (  //tintColor -- 这个是  状态切换的时候给图标不同的颜色
        <Entypo
          name="user"
          size={26}
          style={{ color: tintColor, }}
        />
      ),
    },
  },
});


// eslint-disable-next-line react/no-multi-comp
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
