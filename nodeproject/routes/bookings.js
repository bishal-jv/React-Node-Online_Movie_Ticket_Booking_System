const express = require("express");
const router = express.Router();
const userController = require("../src/controller/cinemaBooking");
const { verifyUser } = require("../src/utils/verify");

/* GET booking details. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/input", verifyUser, userController.inputBooking);
router.get("/history", verifyUser, userController.historyBooking);
router.get("/eticket", verifyUser, userController.eticketBooking);

module.exports = router;
