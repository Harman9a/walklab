import { gql } from "@apollo/client";

const ADD_PATIENT = gql`
  mutation addPatient($name: String!) {
    addPatient(name: $name) {
      id
      name
    }
  }
`;

const DELETE_PATIENT = gql`
  mutation deletePatient($id: ID!) {
    deletePatient(id: $id) {
      id
    }
  }
`;

const EDIT_PATIENT = gql`
  mutation editPatient($id: ID!,$name: String!) {
    editPatient(id: $id, name: $name) {
      id
      name
    }
  }
`;


export { ADD_PATIENT, DELETE_PATIENT , EDIT_PATIENT };
