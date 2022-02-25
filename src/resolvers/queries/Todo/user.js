const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const user = async ({ userId }) => {
  try {
    const user = await User.findById({ _id: userId });
    return user;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = user;
