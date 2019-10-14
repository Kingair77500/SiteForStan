const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("home");
});

router.post("/add", (req, res, next) => {
    res.status(200).send("addFile");
});

router.post("/update/:id", (req, res, next) => {
    res.status(200).send("updateFile");
});

router.get("/category/:category", (req, res, next) => {
    res.status(200).send("categorie");
});

router.get("/likes", (req, res, next) => {
    res.status(200).send("Like");
});

router.get("/download/:id", (req, res, next) => {
   //res.status(200).sendFile(".")*
    res.status(200).send("Download");
});

module.exports = router;
