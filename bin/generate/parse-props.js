/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-19 14:11"
 * @Description:" 构造JSX "
 */

const { isBoolean, isArray, returnStringArray } = require("../../utils");
const parseProps = (property) => {
  let props = ``;
  if (property) {
    Object.entries(property).forEach((item) => {
      if (isBoolean(item[1])) {
        props = `${props} ${item[0]}={${item[1]}}`;
      } else if (isArray(item[1])) {
        props = `${props} ${item[0]}=${returnStringArray(item[1])}`;
      } else {
        props = `${props} ${item[0]}="${item[1]}"`;
      }
    });
  }
  return props;
};

module.exports = {
  parseProps,
};
