const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const updateTodo = async (_, { id, input }) => {
  try {
    const elementToUpdate = await Todo.findByIdAndUpdate(id, input, {
      new: true,
      runValidator: true,
    });
    return elementToUpdate;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = updateTodo;
