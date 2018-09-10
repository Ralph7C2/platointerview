const express = require("express");
const router = express.Router();
const axios = require8("axios");

/* GET users listing. */
router.post("/birthdayService", function(req, res, next) {
  console.log(req.body);
  let payload = req.body;

  res.sendStatus(200);

  if (payload.type === "url_verification" && payload.challenge) {
    return res.json({ challenge: payload.challenge });
  } else if (payload.event.type === "member_joined_channel") {
    axios.post("https://slack.com/api/chat.postMessage", {
      text: "Welcome <@" + payload.event.user + ">!",
      channel: payload.event.channel
    });
  } else if (payload.event.type == "message") {
    axios.post("https://slack.com/api/chat.postMessage", {
      text: "Message from <@" + paload.event.user + ">",
      channel: payload.event.channel
    });
  }
  res.json({});
});

module.exports = router;
