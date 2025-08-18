const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.send("Notes api");
});

app.get("/notes", (req, res) => {
    res.send(notes);
});

app.post("/notes", (req, res) => {
    const note = req.body;
    notes.push(note);
    res.send("note added successfully!");
});

app.delete("/notes/:index", (req, res) => {
    const {index} = req.params;
    delete notes[index];
    res.send('note deleted successfully!')
});

app.patch("/notes/:index", (req, res) => {
    const {index} = req.params;
    const {description} = req.body;

    notes[index].description = description;
    res.send('note updated successfully!')
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
