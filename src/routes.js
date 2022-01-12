const UserControler = require("./controllers/UserController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UserControler.listUsers,
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UserControler.getUserById,
  },
  {
    endpoint: "/users",
    method: "POST",
    handler: UserControler.createUser,
  },
];
