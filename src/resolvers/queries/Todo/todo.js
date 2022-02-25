const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const todo = async (_, { id }) => {
  try {
    return await Todo.findById(id);
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = todo;
