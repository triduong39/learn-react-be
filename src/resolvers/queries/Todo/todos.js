const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const todos = async (_, {}) => {
  try {
    return await Todo.find();
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = todos;
