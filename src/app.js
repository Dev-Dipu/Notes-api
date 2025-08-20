const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Notes api");
});

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.send(notes);
});

app.post("/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await noteModel.create({
        title,
        description,
    });
    res.send(note);
});

app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findOneAndDelete({ _id: id });
    res.send(note);
});

app.patch("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const note = await noteModel.findOneAndUpdate({ _id: id }, { description });
    res.send(note);
});

module.exports = app;
