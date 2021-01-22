/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2020-01-19 14:11"
 * @Description:" 生成app.config.js "
 */

const fs = require("fs");
const Package = require("../package.json");
const { resolveFile } = require("../utils");
const util = require("util");
const { genAppConfigTemplate } = require("../template/app-config-template");

const writeAsync = util.promisify(fs.writeFile);

/**生成app-config */
async function initAppConfig(menus) {
  const tabBar = {
    list: menus.map((menu) => {
      return {
        pagePath: `pages/${menu.pageId}/index`,
        text: menu.pageName,
        iconPath: menu.iconPath,
        selectedIconPath: menu.selectedIconPath,
      };
    }),
  };

  const pages = menus.map((menu) => `pages/${menu.pageId}/index`);
  const config = genAppConfigTemplate(pages, undefined, tabBar);
  try {
    await writeAsync(resolveFile(Package.appConfig), config, "utf-8");
  } catch (error) {
    console.log(error, "生成工程配置文件失败");
  }
}

module.exports = initAppConfig;
