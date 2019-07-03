const { gql } = require('apollo-server')

module.exports = gql`
  directive @isAuth on FIELD_DEFINITION
`;
