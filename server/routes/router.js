const express = require("express");
const router = express.Router();

router.post("/categorize", (req, res) => {
  console.log(req.body);
  res.status(300).json({ msg: req.body });
});

module.exports = router;
