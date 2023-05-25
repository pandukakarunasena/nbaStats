const http = require("http");

const app = require("./app")

const PORT = process.env.PORT || 3006;

const server = http.createServer(app);

async function startServer() {
    server.listen(PORT, () => {
        console.log(`NBA Stats APP backend server listening on port ${PORT}...`);
    });
}

startServer();
