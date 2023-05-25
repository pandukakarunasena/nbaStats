const express = require("express");

const { httpGetNbaTeamKeys } = require("./teamKeys.controller");

const nbaTeamKeyssRouter = express.Router();

nbaTeamKeyssRouter.get('/', httpGetNbaTeamKeys);

module.exports = nbaTeamKeyssRouter;