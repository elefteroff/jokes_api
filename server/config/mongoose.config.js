const mongoose = require("mongoose");
const DB = "joke_db";

mongoose.connect("mongodb://localhost/" + DB)
    .then(() => console.log('Established a connection to the database.'))
    .catch( errorObj => console.log('something went wrong', errorObj ))