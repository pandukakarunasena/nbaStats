const express = require('express');

const nbaNewsRouter = require('./news/news.router');
const nbaTeamsRouter = require('./teams/teams.router');
const nbaStadiumsRouter = require('./stadiums/stadiums.router');
const nbaPlayersRouter = require('./players/players.router');
const nbaTeamKeysRouter = require('./teamKeys/teamKeys.router');

const api = express.Router();

api.use('/News', nbaNewsRouter);
api.use('/TeamList', nbaTeamsRouter);
api.use('/Stadiums', nbaStadiumsRouter);
api.use('/Players', nbaPlayersRouter);
api.use('/GetTeamsKey', nbaTeamKeysRouter);

module.exports = api;