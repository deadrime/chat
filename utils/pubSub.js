const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const NEW_MESSAGE = 'new_message';

module.exports = {
  pubsub,
  NEW_MESSAGE,
}