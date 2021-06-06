var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/:user", function (req, res, next) {
  let user = req.params.user;

  if (user == "host") {
    res.sendFile(path.join(__dirname, "..", "/public/projection/projectionGIF.html"));
    //res.sendFile(path.join(__dirname, "..", "/public/projection/projectionHost.html"));
  }
  else {
    res.sendFile(path.join(__dirname, "..", "/public/projection/projectionGuest.html"));
  }

});

module.exports = router;

