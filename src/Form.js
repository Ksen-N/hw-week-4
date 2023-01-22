import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Tip from "./Tip.js";

export default function Form() {
  let [city, setCity] = useState("Bhilai");
  let [load, setLoad] = useState(false);
  let defCity = "Bhilai";
  const [weather, setWeather] = useState({});
  function Weather(response) {
    setLoad(true);
    console.log(response.data);
    setWeather({
      city: city,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      humid: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function Submit(event) {
    event.preventDefault();
    let APIkey = "a72a4953b235d5f5962e44c508b72c94";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(url).then(Weather);
  }
  function updateSub(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let searchForm = (
    <form onSubmit={Submit} className="search-form" id="search-form">
      <div className="row">
        <div className="col-7">
          <input
            type="search"
            onChange={updateSub}
            placeholder="Type a city✍️"
            autoComplete="off"
            id="city-input"
            className="form-control shadow p-2"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow p-1"
          />
        </div>
      </div>
    </form>
  );
  let Winfo = (
    <div className="Info">
      <h2 className="urcity"> {weather.city} </h2>
      <ul>
        <li>
          Last updated: <span className="color">Saturday 18:30</span>
        </li>
        <li>
          Humidity: <span className="color">{weather.humid}%</span>
        </li>
        <li>
          Wind: <span className="color">{weather.wind}km/h</span>
        </li>
        <li>
          <span className="color desc">{weather.desc}</span>
        </li>
      </ul>
      <div className="clearfix weather-temperature">
        <img
          src={weather.icon}
          alt={weather.desc}
          className="w-icon float-left"
        />
        <div className="float-left">
          <span className="temp d-temp">{weather.temp}</span>
          <span className="units">
            <a href="#" className="active c-link">
              °C
            </a>{" "}
            |
            <a className="f-link" href="#">
              °F
            </a>
          </span>
        </div>
      </div>
    </div>
  );
  if (load) {
    return (
      <div className="Form">
        {searchForm}
        <hr />
        <div className="row">
          <div className="col-6">{Winfo}</div>
          <div className="col-6">
            <Tip />
          </div>
        </div>
      </div>
    );
  } else {
    let APIkey = "a72a4953b235d5f5962e44c508b72c94";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${defCity}&appid=${APIkey}&units=metric`;
    axios.get(url).then(Weather);
    return (
      <div className="Form">
        {searchForm}
        <hr />
        <div className="row">
          <div className="col-6">{Winfo}</div>
          <div className="col-6">
            <Tip />
          </div>
        </div>
      </div>
    );
  }
}
