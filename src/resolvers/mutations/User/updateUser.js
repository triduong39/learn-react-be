const { ApolloError } = require("apollo-server");
const { User } = require("../../../models");

const updateUser = async (_, { id, input }) => {
  try {
    const userToUpdate = await User.findByIdAndUpdate(id, input, {
      new: true,
      runValidator: true,
    });
    return userToUpdate;
  } catch (e) {
    throw new ApolloError(e);
  }
};

module.exports = updateUser;
