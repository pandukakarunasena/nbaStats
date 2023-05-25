const axios = require('axios');
const { COMMON2, KEY } = require('../consts');

// api call to get the players list from nba
async function httpGetNbaPlayers(req, res) {
    try {
        const { input } = req.body;
        const response = await axios.get(`${COMMON2}Players/${input}?key=${KEY}`);
        console.log('done');
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(403).json(JSON.parse(error));
    }
}

module.exports = {
    httpGetNbaPlayers,
};