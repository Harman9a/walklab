const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const DataFields = require("../../DataFieldsGraph/DataFields");

const PatientTypeGraphQL = new GraphQLObjectType({
  name: "patient",
  fields: DataFields,
});

module.exports = PatientTypeGraphQL;
