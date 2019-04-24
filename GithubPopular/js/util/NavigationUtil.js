export default class NavigationUtil {

  /**
   * 返回上级页面
   * @param {navigation} navigation props中的navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }

  static goHome(navigation, routeName){
    navigation.navigate(routeName);
  }

  /**
   * 路由跳转
   * @param {navigation} params
   * @param {string} routName
   */
  static navigate(params, routName) {
    const {navigation,} = NavigationUtil;
    if (!navigation) {
      throw Error('NavigationUtil.navigation cannot be null');
    }
    navigation.navigate(routName,
      {
        ...params,
      });
  }
}