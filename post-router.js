const express = require("express");

const router = express.Router();

const db = require("./data/db");

router.post("/", async (req, res) => {
  try {
    const newPost = await db.insert(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an error while getting the posts." });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await db.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an error while getting the posts." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await db.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an error while getting the posts." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await db.remove(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "There was an error while getting the posts." });
  }
});

module.exports = router;
