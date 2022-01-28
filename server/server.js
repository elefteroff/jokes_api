const express = require("express");
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

require("./config/mongoose.config");
require("./routes/jokes.routes.js")(app);

app.listen(PORT, () => console.log(`server up on Port: ${PORT}`));