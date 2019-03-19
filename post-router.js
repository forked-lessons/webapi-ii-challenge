const express = require("express");

const router = express.Router();

const db = require("./data/db");

router.get("/", async (req, res) => {
  try {
    post = await db.find(req.query);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an error while getting the posts." });
  }
});

router.post("/", (req, res) => {});

router.get("/:id", (req, res) => {});

module.exports = router;
