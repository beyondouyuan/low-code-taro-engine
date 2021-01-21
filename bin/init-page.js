/**
 * @Author:"zhangbin"
 * @Email:"zhangbin29@jd.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 生成页面 "
 */

const { generatePage } = require("./generate/generate-page");

/**生成页面start */
async function initPages(pages = []) {
  for (let i = 0; i < pages.length; i++) {
    generatePage(pages[i], pages[i].pageId);
  }
}

module.exports = initPages;
