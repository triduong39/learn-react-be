const mutations = require("./mutations");
const queries = require("./queries");
const user = require("./queries/Todo/user");
const todos = require("./queries/User/todos");

module.exports = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
  Todo: {
    user: user,
  },
  User: {
    todos: todos,
  },
};
