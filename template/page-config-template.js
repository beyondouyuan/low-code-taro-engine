/**
 * @Author:"zhangbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 页面组件index.config.js文件模版 "
 */

const genPageConfigTemplate = (name) => {
  return `
    export default {
        navigationBarTitleText: '${name}'
      }
      `;
};

module.exports = {
  genPageConfigTemplate,
};
