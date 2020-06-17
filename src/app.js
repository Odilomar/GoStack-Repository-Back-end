const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
    return response.json(repositories);
});

app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body;
    const like = 0;

    if (!title || !url || !techs)
        return response.status(400).json({ error: "Params is incorrect!" });

    const repository = {
        id: uuid(),
        title,
        url,
        techs,
        like
    };

    repositories.push(repositories);

    return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
    // TODO
});

app.delete("/repositories/:id", (request, response) => {
    // TODO
});

app.post("/repositories/:id/like", (request, response) => {
    // TODO
});

module.exports = app;