const express = require("express");

const { httpGetNbaTeams } = require("./teams.controller");

const nbaTeamsRouter = express.Router();

nbaTeamsRouter.get('/', httpGetNbaTeams);

module.exports = nbaTeamsRouter;