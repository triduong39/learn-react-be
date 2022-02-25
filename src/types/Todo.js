const { gql } = require("apollo-server");

const Todo = gql`
  type Todo {
    id: ID!
    name: String!
    status: Boolean!
    user: User
  }

  input CreateTodoInput {
    name: String!
    status: Boolean
    userId: String!
  }

  input UpdateTodoInput {
    name: String
    status: Boolean
    userId: String
  }

  type DeletePayload {
    id: ID!
  }

  type Query {
    todos: [Todo]
    todo(id: String!): Todo
    todosByUserId(userId: String!): [Todo]
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
    deleteTodo(id: ID!): DeletePayload!
  }
`;

module.exports = Todo;
