const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');
const path = require("path");


const api = require("./routes/api");
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    cors({
        origin: "http://localhost:3006",
    })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse body params and attache them to req.body
app.use(bodyparser.json())

// direct application to the default start page of the react app
app.use(express.static(path.join(__dirname, "..", 'client/build')))

// api routes with versioning
app.use('/v1', api);

// simple route to default page in client/public 
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
