const express = require("express");

const { httpGetNbaStadiums } = require("./stadiums.controller");

const nbaStadiumsRouter = express.Router();

nbaStadiumsRouter.get('/', httpGetNbaStadiums);

module.exports = nbaStadiumsRouter;