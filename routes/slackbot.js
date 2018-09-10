var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/birthdayService", function(req, res, next) {
  console.log(req.body);
  if (req.body.type === "url_verification" && req.body.challenge) {
    return res.json({ challenge: req.body.challenge });
  }
  res.json({});
});

module.exports = router;
