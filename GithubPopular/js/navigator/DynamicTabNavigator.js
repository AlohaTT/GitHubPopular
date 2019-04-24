/*
 * @Author: Tony
 * @Date: 2019-04-24 17:18:08
 * @Last Modified by: Tony
 * @Last Modified time: 2019-04-24 18:28:48
 */
import React, { Component, } from 'react';
import { createBottomTabNavigator, createAppContainer, BottomTabBar, } from 'react-navigation';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const TABS = {
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
};

export default class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox;
  }

  _renderTabs = () => {
    const { Popular, Trending, Favorite, My, } = TABS;
    const tabs = { Popular, Trending, Favorite, My, };
    return createBottomTabNavigator(tabs, {
      tabBarComponent: TabBottomComponent,
    });
  }

  render() {
    const Container = createAppContainer(this._renderTabs());
    return (
      <Container />
    );
  }
}

class TabBottomComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }
  render() {
    const { routes, index, } = this.props.navigation.state;
    if (routes[index].params) {
      const { theme, } = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.activeTintColor}
    />;
  }
}
