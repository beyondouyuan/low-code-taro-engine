/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 页面组件文件模版 "
 */

const genComponentTemplate = (importList = [], JSX) => {
  return `
    import React, { Component, Fragment } from 'react'

    ${importList.join("\n\t\t")}
    export default class Index extends Component {
      render () {
        return (
          <Fragment>
            ${JSX}
          </Fragment>
        )
      }
    }`;
};

module.exports = {
  genComponentTemplate,
};
