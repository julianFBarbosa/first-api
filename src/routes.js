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
    endpoint: "/products",
    method: "GET",
    handler: UserControler.listUsers,
  },
];
