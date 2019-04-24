/* eslint-disable react/no-multi-comp */
import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import NavigationUtil from '../util/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';


// eslint-disable-next-line react/no-multi-comp
export default class HomePage extends Component {
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
