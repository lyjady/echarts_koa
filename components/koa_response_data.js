const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  let url = ctx.request.url;
  url = url.replace('/api', '')
  let filePath = `../data${url}.json`
  filePath = path.join(__dirname, filePath)
  try {
    let data = await fileUtils.getJsonData(filePath);
    ctx.response.body = data
  } catch (err) {
    ctx.response.body = '{message: \'error\'}'
  }
  await next()
}
