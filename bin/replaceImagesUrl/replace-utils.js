/**
 * @Author:"zhangbin"
 * @Email:"zhangbin29@jd.com"
 * @LastEditTime:"2021-01-21 10:11"
 * @Description:" 工具方法 "
 */

const urlModule = require("url");
const fs = require("fs");
const http = require("http");
const path = require("path");
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36";

/**校验url */
const checkValidateUrl = (url = "") => {
  let schema = urlModule.parse(url);
  let { hostname } = schema;
  let isUrl = !!hostname;
  let fileName = null;
  if (isUrl) {
    fileName = path.parse(schema.pathname).base;
  }
  Object.assign(schema, { fileName });
  return { isUrl, schema };
};

/**下载图片到本地 */
const downloadImage = (
  url,
  dest,
  fileName,
  { timeout = 1 * 60 * 1000, retries = 4 } = {}
) => {
  dest = path.join(__dirname, dest);
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  let filePath = dest + fileName;
  let isRetry = false;
  let req = http.request(url, (res) =>
    res.pipe(fs.createWriteStream(filePath, { flags: "w+" }))
  );
  req.setTimeout(timeout, () => {
    req.abort();
    isRetry = true;
  });
  req.setHeader("User-Agent", userAgent);
  req.on("error", () => {
    isRetry = true;
  });
  req.on("close", () => {
    timeout += 60 * 1000;
    retries -= 1;
    if (isRetry && retries > 0) downloadImage(url, dest, { timeout, retries });
  });
  req.end();
};

/**异步批量下载 */
const asynDownloadMultiImages = (images, dest) => {
  images.forEach((image) => {
    const {
      schema: { fileName },
    } = checkValidateUrl(image);
    if (fileName) {
      downloadImage(image, dest, fileName);
    }
  });
};

module.exports = {
  asynDownloadMultiImages,
  checkValidateUrl,
};
