const fs = require('fs')
module.exports.getJsonData = path => {
  return new Promise(((resolve, reject) => {
    fs.readFile(path, 'utf-8', ((err, data) => err ? reject(err) : resolve(data)))
  }))
}
