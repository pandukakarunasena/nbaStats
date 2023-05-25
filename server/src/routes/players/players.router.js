const express = require("express");

const { httpGetNbaPlayers } = require("./players.controller");

const nbaPlayersRouter = express.Router();

nbaPlayersRouter.post('/', httpGetNbaPlayers);

module.exports = nbaPlayersRouter;