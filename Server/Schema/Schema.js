const { GraphQLSchema } = require("graphql");

const mutation = require("./Mutations/Mutation");

const RootQuerry = require("./RootQuerry/RootQuerry");

module.exports = new GraphQLSchema({
  query: RootQuerry,
  mutation: mutation,
});
