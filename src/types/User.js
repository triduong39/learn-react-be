const { gql } = require("apollo-server");

const User = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    todos: [Todo]
  }

  input CreateUserInput {
    name: String!
    userName: String!
    password: String!
  }

  input UpdateUserInput {
    name: String
    password: String
  }

  type DeletePayload {
    id: ID!
  }

  type Query {
    users: [User]
    user(id: String!): User
    login(userName: String!, password: String!): String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): DeletePayload!
  }
`;

module.exports = User;
