import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import NavigationUtil from '../util/NavigationUtil';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.goHome(this.props.navigation, 'Home');
    }, 200);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> WelcomePage </Text>
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
