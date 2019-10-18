const express = require("express");
const router = express.Router();

router.get("/add", (req, res, next) => {
    res.status(200).send("couocu category");
});

module.exports = router;