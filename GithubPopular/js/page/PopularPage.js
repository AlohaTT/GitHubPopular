/* eslint-disable react/no-multi-comp */
import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, } from 'react-navigation';
import NavigationUtil from '../util/NavigationUtil';




export default class PopularPage extends Component {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1',
        },
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2',
        },
      },
    }));
    return (
      <TabNavigator />
    );
  }
}

class PopularTab extends Component {

  _onPress = () => {
    NavigationUtil.navigate(this.props.navigation, 'Detail');
  }


  render() {
    const { tabLabel, } = this.props;
    return (
      <View>
        <Text onPress={this._onPress}> tabLabel </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
