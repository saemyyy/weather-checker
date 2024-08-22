import React from "react";
import "./App.css";

export default function MyApp() {
  return (
    <div className="box">
      <input id="input" type="text" />
      <div className="data" id="city">
        Stadt
      </div>
      <div className="data" id="weather-status">
        Wetter
      </div>
      <div className="data" id="temp">
        Temperatur
      </div>
      <div className="data" id="cloudy">
        Wolkig
      </div>
      <div className="data" id="humidity">
        Feuchtigkeit
      </div>
    </div>
  );
}
