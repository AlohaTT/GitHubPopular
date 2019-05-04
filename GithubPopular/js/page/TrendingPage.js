import React, { Component, } from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';
import { connect, } from 'react-redux';
import actions from '../action/index';
class TrendingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.props.onThemeChange('red');
          }}
          title={'改变颜色'}
        />
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

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  onThemeChange: (theme) => {
    dispatch(actions.onThemeChange(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);

