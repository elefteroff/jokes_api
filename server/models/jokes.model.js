const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, {timestamps: true})

const Jokes = mongoose.model("Joke", JokeSchema);

module.exports = Jokes;