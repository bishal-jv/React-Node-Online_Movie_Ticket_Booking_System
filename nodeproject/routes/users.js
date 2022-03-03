const express = require("express");
const router = express.Router();
const userController = require("../src/controller/cinemaUser");
const { verifyAdmin } = require("../src/utils/verify");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/list-users", verifyAdmin, userController.listUsers);

module.exports = router;
