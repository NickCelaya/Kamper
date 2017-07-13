const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

//connection to the front end
app.use(express.static(__dirname + "./../public"));




const mainCtrl = require("./apiController.js");

//endpoint for appid

app.get("/api/weather", mainCtrl.getWeather);









const PORT = 3001;
app.listen(PORT, () => {
  console.log(`War on port: ${PORT}`);
})
