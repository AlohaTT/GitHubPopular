export default class NavigationUtil {

  /**
   * 返回上级页面
   * @param {navigation} navigation props中的navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }

  /**
   * 路由跳转
   * @param {navigation} navigation
   * @param {string} routName 路由地址
   * @param {*} props
   */
  static navigate(navigation, routName, props = null) {
    navigation.navigate(routName, props);
  }
}