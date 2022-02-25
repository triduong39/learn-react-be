const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const todosByUserId = async (_, { userId }) => {
  try {
    console.log(userId);
    return await Todo.find({ userId: userId });
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = todosByUserId;
