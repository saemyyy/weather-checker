//import assets and important things from react itself
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import { useState } from "react";

// function that checks the weather and pulls from the api (with key)
const WeatherChecker = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const api_key = "api key on website";

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
    const res = await fetch(url);
    const searchData = await res.json();
    console.log(searchData);
    setData(searchData);
    setLocation("");
  };

  // function for "Enter" Key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  // function that assigns what weather uses what image
  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;

  const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07,#fcd283",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff",
    Snow: "linear-gradient(to right, #aff2ff, #fff",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec",
  };

  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : "linear-gradient(to right, #f3b07, #fcd283";

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}.${month}.${year}`;
  }

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage:
            backgroundImage && backgroundImage.replace
              ? backgroundImage.replace("to right", "to top")
              : null,
        }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">
              {data.name ? data.name : "City"},
              {data.sys && data.sys.country ? data.sys.country : "Country"}
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />{" "}
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <img
            src={weatherImage}
            alt="Weather"
            style={{ display: weatherImage ? "block" : "none" }}
          />
          <div className="weather-type">
            {data.weather ? data.weather[0].main : null}
          </div>
          <div className="temp">
            {data.main ? Math.round(data.main.temp) + "°" : "0°"}
          </div>
        </div>
        <div className="weather-date">
          <p>{getDate()}</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">
              {data.main ? data.main.humidity + "%" : "0%"}
            </div>
          </div>
          <div className="wind">
            <div className="data-name">Wind Speed</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">
              {data.wind
                ? Math.round(data.wind.speed * 3.6) + "km/h"
                : "0 km/h"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherChecker;
