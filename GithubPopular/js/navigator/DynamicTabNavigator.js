/*
 * @Author: Tony
 * @Date: 2019-04-24 17:18:08
 * @Last Modified by: Tony
 * @Last Modified time: 2019-05-04 23:34:23
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
import { connect, } from 'react-redux';

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

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox;
  }

  _renderTabs = () => {
    const { Popular, Trending, Favorite, My, } = TABS;
    const tabs = { Popular, Trending, Favorite, My, };
    return createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBottomComponent theme={this.props.theme}
          {...props}
               />;
      },
    }));
  }

  render() {
    const Tabs = this._renderTabs();
    return (
      <Tabs />
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
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
           />;
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
