const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

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
        like,
    };

    repositories.push(repository);

    return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
    const { id } = request.params;
    let { url, title, techs } = request.body;

    const repositoryIndex = repositories.findIndex(
        (repository) => repository.id == id
    );

    if (repositoryIndex < 0)
        return response.status(400).json({ error: "Repository not found!" });

    const oldRepository = repositories[repositoryIndex];

    url = url ? url : oldRepository.url;
    title = title ? title : oldRepository.title;
    techs = techs ? techs : oldRepository.techs;

    const repository = {
        id,
        title,
        url,
        techs,
    };

    repositories[repositoryIndex] = repository;

    return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const repositoryIndex = repositories.findIndex(
        (repository) => repository.id == id
    );

    if (repositoryIndex < 0)
        return response.status(400).json({ error: "Repository not found!" });
});

app.post("/repositories/:id/like", (request, response) => {
    const { id } = request.params;

    const repositoryIndex = repositories.findIndex(
        (repository) => repository.id == id
    );

    if (repositoryIndex < 0)
        return response
            .status(400)
            .json({ error: "Repository ID does not exists!" });

    repositories[repositoryIndex].like += 1;

    const repository = repositories[repositoryIndex];

    return response.json(repository);
});

module.exports = app;