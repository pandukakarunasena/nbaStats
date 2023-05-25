const axios = require('axios');
const { COMMON, KEY } = require('../consts');

// api call to get the teams list from nba
async function httpGetNbaTeams(req, res) {
    try {
        const response = await axios.get(`${COMMON}teams?key=${KEY}`);
        console.log('done');
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(403).json(JSON.parse(error));
    }
}

module.exports = {
    httpGetNbaTeams,
};
