const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");
const PatientTypeGraphQL = require("../GraphQlTypes/PatientType");
const PatientData = require("../../models/Patient");
const DataFields = require("../../DataFieldsGraph/DataFields");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPatient: {
      type: PatientTypeGraphQL,
      args: DataFields,
      resolve(parent, args) {
        let data = new PatientData({
          ...args,
        });
        return data.save();
      },
    },

    deletePatient: {
      type: PatientTypeGraphQL,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return PatientData.findByIdAndDelete(args.id);
      },
    },
    editPatient: {
      type: PatientTypeGraphQL,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return PatientData.findByIdAndUpdate(args.id, {
          name: args.name,
        });
      },
    },
  },
});

module.exports = mutation;
