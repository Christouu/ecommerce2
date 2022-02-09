const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("zdr");
});

module.exports = router;
