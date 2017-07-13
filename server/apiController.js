const axios = require("axios");
const keys = require("./../config.js");


exports.getWeather = (req, res) => {
  return axios.get("http://api.openweathermap.org/data/2.5/weather?q=Salt Lake City&units=imperial&appid=" + keys.openWeatherKey).then( (response) => {

  console.log("it worked.");

  res.status(200).send(response.data)

  });

}
