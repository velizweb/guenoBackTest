let router = require("express").Router();
let user = require("./../controller/user");

router.get("/:cuit", user.getDataUser);

module.exports = router;
