import React, { Component, } from 'react';
import { Text, StyleSheet, View, } from 'react-native';

export default class TrendingPage extends Component {
  render() {
    const { navigation, } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          navigation.setParams({
            theme: {
              tintColor: 'red',
              updateTime: new Date().getTime(),
            },
          });
        }}
        > 改变颜色 </Text>
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
