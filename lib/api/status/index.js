const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Server Status");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let status;
  try {
    status = await app.getStatus();
  } catch (e) {
    logger.error(e);
    res.status(500);
    return res.send();
  }
  res.json(status);
  logger.debug(status);
});

app.post('/get/ip/address', function (req, res) {
  request.connection.remoteAddress //for diplaying the IP address
})

module.exports = router;
