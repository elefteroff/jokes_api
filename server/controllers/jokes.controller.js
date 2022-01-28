const Joke = require('../models/jokes.model');

module.exports = {

    findAllJokes : (req, res) => {
// ...retrieve an array of all documents in the Joke collection
        Joke.find()
            .then(allJokes => res.json(allJokes))
            // logic with jokes results
            .catch(err => res.json(err));
    },

    findOneJoke : (req, res) => {
    // ...retrieve 1 document (the first record found) matching the query object criteria
        Joke.findOne({_id: req.params.id})
            .then(oneOnlyJoke => res.json(oneOnlyJoke))
            .catch(err => res.json(err));
    },

    // ...create a new document to store in the Jokes collection and save it to the DB.
    createNewJoke : (req, res) => {
        const {name} = req.body;
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json(err));
    // If there's an error and the record was not saved, this (err) will contain validation errors.
    },

    updateOneJoke : (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedJoke => res.json({ joke: updatedJoke }))
            .catch(err => res.json(err));
    },

    // ...delete 1 document that matches the query object criteria
    deleteOneJoke : (req, res) => {
        const {id} = req.params
        Joke.remove(req.params.id)
            .then(deleteJoke => res.json())
            .catch(err => res.json(err))
    }
}
