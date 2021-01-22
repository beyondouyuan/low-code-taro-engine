/**
 * @Author:"xiaobinbin"
 * @Email:"1933495710@qq.com"
 * @LastEditTime:"2021-01-14 14:11"
 * @Description:" 引擎入口 "
 */
const Data = require("../data");
const initialize = require("./initialize");
const replaceImages = require("./replaceImagesUrl");

/**本地化图标 */
replaceImages(Data);
/**start 生成 */
initialize(Data);
