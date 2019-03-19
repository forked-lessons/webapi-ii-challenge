const express = require("express");

const postsRouter = require("./posts");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h2>Lambda Hubs API</h2><p>Welcome to the Lambda Hubs API</p>");
});
server.use("/api/posts", postsRouter);
module.exports = server;
