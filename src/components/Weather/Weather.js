import axios from "axios";
import { useState, useEffect } from "react";
import "./Weather.css";
import meteoLogo from "../../Assets/meteo/meteoLogo";

export default function Weather({ state }) {
  const city = state.city;
  const [weatherData, setWeatherData] = useState({});

  const apiKeyOW = "5e9e0872d98e269729b2b7a29ac847a0";
  const apiKeyTZ = "EZFSVRP765XN";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOW}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        axios
          .get(
            `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKeyTZ}&format=json&by=position&lat=${response.data.coord.lat}&lng=${response.data.coord.lon}`
          )

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <>
      {weatherData.main ? (
        <div className="container-meteo">
          <p className="temperature">{weatherData.main.temp}°C</p>
          <img
            src={meteoLogo[`type${weatherData.weather[0].icon}`]}
            alt={weatherData.weather[0].description}
          />
        </div>
      ) : (
        <div className="container-meteo">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
