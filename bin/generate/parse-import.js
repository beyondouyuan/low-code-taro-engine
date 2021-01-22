/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 构造import组件项 "
 */

const parseImports = (Imports) => {
  const cacheMap = {};
  const currentImports = Imports.filter(({ type, source }) => {
    if (!source) {
      throw new Error("组件缺少componentSource");
    }
    if (!cacheMap[`${type}__${source}`]) {
      cacheMap[`${type}__${source}`] = type;
      return true;
    }
  });
  return currentImports.map(
    ({ type, source }) => `import { ${type} } from "${source}"`
  );
};

module.exports = {
  parseImports,
};
