const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const users = async (_, {}) => {
  try {
    return await User.find();
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = users;
