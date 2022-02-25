const { ApolloError } = require("apollo-server");
const { Todo } = require("../../../models");

const deleteTodo = async (_, { id }) => {
  const deleteElement = await Todo.findByIdAndDelete(id);
  if (deleteElement) return { id: id };
  else throw new ApolloError(`Failed to delete address.`);
};

module.exports = deleteTodo;
