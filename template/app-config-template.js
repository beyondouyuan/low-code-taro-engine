/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" app.config.js文件模版 "
 */

const genAppConfigTemplate = (
  pages,
  window = {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar
) => {
  return `export default {
        pages:${JSON.stringify(pages)},
        window:${JSON.stringify(window)},
        tabBar:${JSON.stringify(tabBar)}
    }`;
};

module.exports = {
  genAppConfigTemplate,
};
