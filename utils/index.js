/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-18 10:11"
 * @Description:" 工具方法 "
 */
const Path = require("path");

const resolveFile = (path) => Path.resolve(__dirname, path);

const isBoolean = (val) => {
  return Object.prototype.toString.call(val) === "[object Boolean]";
};

const isArray = (val) => {
  return Object.prototype.toString.call(val) === "[object Array]";
};

const returnStringArray = (val = []) => {
  if (val.length === 0) return `{[]}`;
  const arr = val.map((item) => {
    return `"${item}"`;
  });
  return `{[${arr.join(",")}]}`;
};

module.exports = {
  resolveFile,
  isBoolean,
  isArray,
  returnStringArray,
};
