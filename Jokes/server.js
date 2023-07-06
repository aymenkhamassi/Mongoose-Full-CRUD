const express = require("express");
const app = express();

require('dotenv').config()



app.use( express.json() ,express.urlencoded({ extended: true }) );
const port = process.env.PORT


require("./config/mongoose.config")
require("./routes/jokes.routes")(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );  