// const { readdirSync } = require('fs');
const chat = require('./chat');
const message = require('./message');
const user = require('./user');
const query = require('./query');
const mutation = require('./mutation');
const subscription = require('./subscription');
const directives = require('./directives');

// const types = readdirSync(__dirname)
//   .filter(f => f !== 'index.js')
//   .map((file) => require(`./${file}`));

module.exports = [
  chat,
  message,
  user,
  query,
  mutation,
  subscription,
  directives,
];