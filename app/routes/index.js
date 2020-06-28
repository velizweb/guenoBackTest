let router = require("express").Router();
let users = require("./user");

router.use("/users", users);

router.get("/", (request, response) => {
  response.status(200).json({ info: "Node.js y Express" });
});

module.exports = router;
