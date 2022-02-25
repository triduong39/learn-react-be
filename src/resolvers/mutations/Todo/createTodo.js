const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const createTodo = async (_, { input }) => {
  try {
    const newTodo = await Todo.create(input);
    return newTodo;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = createTodo;
