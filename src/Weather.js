import React, { useState }from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast.js";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [ temperature , setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(Math.round(response.data.main.temp));
        setReady(true);
    }

    if(ready) {
 return (
        <div className="Weather container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <form>
                            <input type="text" placeholder="Enter a city" className="enterCity" />
                            <input type="submit" value="Search" className="search" />

                        </form>
                    </div>
                    <h3 className="card-title">Valencia</h3>
                    <h5 className="card-subtitle">{temperature}°C</h5>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <img width="180" src="https://media.giphy.com/media/LVsi0kq0KNet3vDPLa/giphy.gif" alt="weather gif"></img>
                                </li>

                                <li className="WeatherDescription">Weather description</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="WeatherDataUl">
                                <li className="WeatherData MaxTemp">Max temperature</li>
                                <li className="WeatherData MinTemp">Min Temperature</li>
                                <li className="WeatherData WindSpeed">Wind Speed</li>
                                <li className="WeatherData Humidity">Humidity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <Forecast />

                    </div>


                </div>
            </div>
        </div>
    )
    } else {
        const apiKey = "751305c75f9526727cdf4f36e45a4e75";
    let city = "Valencia";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return"Our weather elves are working on your request, one moment please";
    }

  
   
}