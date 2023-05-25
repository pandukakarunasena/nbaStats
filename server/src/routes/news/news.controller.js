const axios = require('axios');
const { COMMON, KEY } = require('../consts');


// api call to get the news from nba
async function httpGetNbaNews(req, res) {
    try {
        const response = await axios.get(`${COMMON}News?key=${KEY}`);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(403).json(JSON.parse(error));
    }
}

module.exports = {
    httpGetNbaNews,
};