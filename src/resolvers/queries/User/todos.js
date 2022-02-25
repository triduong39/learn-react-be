const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const todos = async ({ id }) => {
  try {
    const userTodos = await Todo.find({ userId: id });
    return userTodos;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = todos;
