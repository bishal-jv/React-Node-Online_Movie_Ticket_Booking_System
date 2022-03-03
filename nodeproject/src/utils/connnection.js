const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/Node-exam",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("DATABASE CONNECTED");
  }
);
