/**
 * @Author:"zhangbin"
 * @Email:"zhangbin29@jd.com"
 * @LastEditTime:"2021-01-18 10:11"
 * @Description:" 生成package.json "
 */

const fs = require("fs");
const Package = require("../package.json");
const { resolveFile } = require("../utils");
const util = require("util");

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

/**增加依赖缓存及依赖去重 */
const cacheDependencies = {};
const isCache = (key) => {
  if (cacheDependencies[key]) {
    return true;
  }
  cacheDependencies[key] = key;
  return false;
};

/**初始化入口 */
async function initPackage(pages) {
  const packageJSON = await getPackageJSON();
  pages.forEach(({ components }) => {
    parseComponents(components, packageJSON);
  });
  try {
    await writeAsync(
      resolveFile(Package.appPackageJson),
      JSON.stringify(packageJSON),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
}

/**获取package json文件 */
async function getPackageJSON() {
  const data = await readAsync(resolveFile(Package.appPackageJson));
  return JSON.parse(data);
}

/**递归解析组件 */
async function parseComponents(components, packageJSON) {
  components.forEach((component) => {
    parseDependencies(component, packageJSON);
  });
}

/**解析依赖 */
async function parseDependencies(component, packageJSON) {
  const { children, componentSource } = component;
  if (children) {
    parseComponents(children, packageJSON);
  }
  if (componentSource) {
    const { npm } = componentSource;
    if (npm) {
      const npmName = npm.replace(/'/g, '"');
      const [sourceName, version] = npmName.split(":");
      if (!isCache(`${sourceName}-${version}`)) {
        packageJSON.dependencies[sourceName] = version;
      }
    }
  }
}

module.exports = initPackage;
