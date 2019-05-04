/* eslint-disable react/no-multi-comp */
import React, { Component, } from 'react';
import NavigationUtil from '../util/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import { connect, } from 'react-redux';


// eslint-disable-next-line react/no-multi-comp
class HomePage extends Component {
  render() {
    const { theme, } = this.props;
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const mapStateToProps = (state) => ({
  theme:state.theme,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
