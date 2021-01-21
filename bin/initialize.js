/**
 * @Author:"zhangbin"
 * @Email:"zhangbin29@jd.com"
 * @LastEditTime:"2021-01-18 10:11"
 * @Description:" 初始化方法 "
 */

const initPackage = require("./init-package");
const initAppConfig = require("./init-app-config");
const initPage = require("./init-page");

async function initialize(data) {
  const { pages, menus } = data;
  /**初始化package文件 */
  initPackage(pages);
  /**初始化app config */
  initAppConfig(menus);
  /**初始化页面 */
  initPage(pages);
}

module.exports = initialize;

