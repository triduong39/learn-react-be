const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const deleteUser = async (_, { id }) => {
  const deleteElement = await User.findByIdAndDelete(id);
  if (deleteElement) return { id: id };
  else throw new ApolloError(`Failed to delete address.`);
};

module.exports = deleteUser;
