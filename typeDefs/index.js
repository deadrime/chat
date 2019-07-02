const { readdirSync } = require('fs')
const types = readdirSync(__dirname)
  .filter(f => f !== 'index.js')
  .map((file) => require(`./${file}`));

module.exports = types