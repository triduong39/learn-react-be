const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const createUser = async (_, { input }) => {
  try {
    const newUser = await User.create(input);
    return newUser;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = createUser;
