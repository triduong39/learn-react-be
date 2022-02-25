const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const user = async (_, { id }) => {
  try {
    return await User.findById(id);
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = user;
