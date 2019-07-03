const { SchemaDirectiveVisitor } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

class IsAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const [, , { user }] = args
      // console.log(user)
      if (!user) throw new Error('You must be the authenticated user to get this information');
      const result = await resolve.apply(this, args);
      return result;
    };
  }
}

module.exports = IsAuthDirective