import React from "react";
import IconGif from "./IconGif.js";

export default function WeatherData(props) {

    return (
        <div className="WeatherData">
            <h3 className="card-title">{props.data.city}</h3>
                
                    <h5 className="card-subtitle">{props.data.temperature}°C</h5>
                    
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <IconGif  code={props.data.icon}/>
                                    
                                </li>

                                <li className="text-capitalize WeatherDescription">{props.data.description}</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="WeatherDataUl">
                                <li className="WeatherData MaxTemp">Temp Max: {props.data.maxTemp}°C</li>
                                <li className="WeatherData MinTemp">Temp Min: {props.data.minTemp}°C</li>
                                <li className="WeatherData WindSpeed">Wind Speed: {props.data.wind} km/h</li>
                                <li className="WeatherData Humidity">Humidity: {props.data.humidity}%</li>
                            </ul>
                        </div>
                    </div>
        </div>
    );
}