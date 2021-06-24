import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather container">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Valencia</h3>
                    <h5 className="card-subtitle">22°C</h5>
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


                </div>
            </div>
        </div>
    )
}