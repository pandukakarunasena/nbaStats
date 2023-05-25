const axios = require('axios');
const { COMMON2, KEY } = require('../consts');

// api call to get the team keys list from nba
async function httpGetNbaTeamKeys(req, res) {
    try {
        const response = await axios.get(`${COMMON2}teams?key=${KEY}`);
        console.log('done');
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(403).json(error.response.data);
    }
}

module.exports = {
    httpGetNbaTeamKeys,
};