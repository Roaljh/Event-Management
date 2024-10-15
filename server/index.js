const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const bodyParser = require("body-parser")
const routes = require("./routes/mainRoot")

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use("/api", routes)
// create a route in route folder
// use route as middleware
dotenv.config();
const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})