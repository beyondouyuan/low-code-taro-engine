/**
 * @Author:"zhangbin"
 * @Email:"zhangbin29@jd.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 生成页面 "
 */

const fs = require("fs");
const { resolveFile } = require("../../utils");
const util = require("util");

const writeAsync = util.promisify(fs.writeFile);
const isExistsAsync = util.promisify(fs.exists);
const mkdirAsync = util.promisify(fs.mkdir);

const { parseImports } = require("./parse-import");
const { parseProps } = require("./parse-props");
const { genComponentTemplate } = require("../../template/component-template");
const {
  genPageConfigTemplate,
} = require("../../template/page-config-template");
const Package = require("../../package.json");

/**生成页面 */
async function generatePage(page, pagesPathUrl) {
  const Imports = [];
  const RenderList = [];
  const { components = [], pageName } = page;
  await generateFolder(pagesPathUrl);
  generateConfigFile(pageName, pagesPathUrl);
  await components.forEach(async function (component) {
    const currentJSX = await generateJSX(component, Imports);
    RenderList.push(currentJSX);
  });
  const currentImport = parseImports(Imports);

  try {
    await writeAsync(
      resolveFile(`${Package.appPagesFolder}/${pagesPathUrl}/index.jsx`),
      genComponentTemplate(currentImport, RenderList),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
}

/**生成配置config */
async function generateConfigFile(name, pagesPathUrl) {
  try {
    await writeAsync(
      resolveFile(`${Package.appPagesFolder}/${pagesPathUrl}/index.config.js`),
      genPageConfigTemplate(name),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
}

/**解析仓库地址 */
function parseComponentSource(componentSource) {
  if (componentSource) {
    const { npm } = componentSource;
    if (npm) {
      const npmName = npm.replace(/'/g, '"');
      const [sourceName] = npmName.split(":");
      return sourceName;
    }
  }
}

/**生成jsx */
async function generateJSX(component, Imports) {
  let previous = ``;
  const componentStack = [];
  const endStack = [];
  const lenStack = [];
  componentStack.push(component);
  while (componentStack.length > 0) {
    const tmpNode = componentStack.pop();
    const { userProps, componentSource, type } = tmpNode;

    const source = parseComponentSource(componentSource);
    Imports.push({ type, source });
    const currentProps = parseProps(userProps);

    if (tmpNode.children && tmpNode.children.length > 0) {
      previous = `${previous}<${type} ${currentProps}>`;
      endStack.push(`</${type}>`);

      lenStack.push(tmpNode.children.length);
      for (i = tmpNode.children.length - 1; i >= 0; i--) {
        componentStack.push(tmpNode.children[i]);
      }
    } else {
      previous = `${previous}<${type} ${currentProps}></${type}>`;
    }

    while (lenStack.length > 0 && lenStack[lenStack.length - 1] < 1) {
      let node = endStack.pop();
      previous = `${previous}${node}`;
      lenStack.pop();
    }
    const len = lenStack.pop();
    lenStack.push(len - 1);
  }
  return previous;
}

/**生成文件夹 */
async function generateFolder(pagesPathUrl) {
  const isExists = await isExistsAsync(
    resolveFile(`${Package.appPagesFolder}/${pagesPathUrl}`)
  );
  if (!isExists) {
    try {
      await mkdirAsync(
        resolveFile(`${Package.appPagesFolder}/${pagesPathUrl}`)
      );
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  generatePage,
};
