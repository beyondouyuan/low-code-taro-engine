/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-21 10:11"
 * @Description:" 图标本地化处理 "
 */
const {
  asynDownloadMultiImages,
  checkValidateUrl,
} = require("./replace-utils");

/**本地化处理 */
const replaceImages = (data) => {
  const { menus } = data;
  const folder = `../../generate-app/src/images/`;
  const images = [];
  menus.forEach((menu) => {
    const { iconPath, selectedIconPath } = menu;
    if (checkValidateUrl(iconPath).isUrl) {
      images.push(iconPath);
      replaceUrl(iconPath, menu, "iconPath");
    } else {
      throw new Error("图标本地化失败，请检查地址格式");
    }
    if (checkValidateUrl(selectedIconPath).isUrl) {
      images.push(selectedIconPath);
      replaceUrl(selectedIconPath, menu, "selectedIconPath");
    } else {
      throw new Error("图标本地化失败，请检查地址格式");
    }
  });
  asynDownloadMultiImages(images, folder);
};

/**替换路径 */
function replaceUrl(imageUrl, menu, key) {
  const imageSplit = imageUrl.split("/");
  menu[key] = `./images/${imageSplit[imageSplit.length - 1]}`;
}

module.exports = replaceImages;
