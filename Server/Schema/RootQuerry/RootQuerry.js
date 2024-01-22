const { GraphQLObjectType, GraphQLList } = require("graphql");
const PatientTypeGraphQL = require("../GraphQlTypes/PatientType");
const PatientData = require("../../models/Patient");

const RootQuerry = new GraphQLObjectType({
  name: "RootQuerryType",
  fields: {
    PatientAll: {
      type: new GraphQLList(PatientTypeGraphQL),
      resolve: (parent, args) => {
        return PatientData.find();
      },
    },
  },
});

module.exports = RootQuerry;
