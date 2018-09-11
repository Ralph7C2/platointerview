const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/slashbirthday", async function(req, res) {
  console.log(req.body);
  res.sendStatus(200);
  let result = await axios.post(
    "https://hooks.slack.com/commands/TCQVC0XPX/432862834322/JozyKXYLktlvDF78poo1EvPb",
    {}
  );
});

router.post("/birthdayService", async function(req, res, next) {
  console.log(req.body);
  let payload = req.body;

  if (payload.type === "url_verification" && payload.challenge) {
    return res.json({ challenge: payload.challenge });
  } else if (payload.event.type === "member_joined_channel") {
    let result = await axios.post(
      " https://hooks.slack.com/services/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",
      {
        text: "Welcome <@" + payload.event.user + ">!",
        channel: payload.event.channel
      }
    );
    console.log(result.data);
  } else if (payload.event.type == "message") {
    console.log("Message event");
    let result = await axios.post(
      " https://hooks.slack.com/services/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",
      {
        text: "Message from <@" + payload.event.user + ">",
        channel: payload.event.channel
      }
    );
    console.log(result.data);
  }

  res.sendStatus(200);
});

module.exports = router;
