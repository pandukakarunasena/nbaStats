const express = require("express");

const { httpGetNbaNews } = require("./news.controller");

const nbaNewsRouter = express.Router();

nbaNewsRouter.get("/", httpGetNbaNews);

module.exports = nbaNewsRouter;
