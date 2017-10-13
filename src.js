let util = require('util');
let fs = require('fs')

module.exports = util.promisify(fs.readFile)

