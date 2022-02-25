const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const login = async (_, { userName, password }) => {
  try {
    const user = await User.findOne({ userName });
    if (!user) throw new ApolloError("User not found!");
    if (user.password !== password)
      throw new ApolloError("Password incorrect!");
    return user._id;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = login;
