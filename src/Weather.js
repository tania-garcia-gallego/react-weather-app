import React, { useState }from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast.js";
import WeatherData from "./WeatherData.js";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [ weatherData , setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            maxTemp: Math.round(response.data.main.temp_max),
            minTemp: Math.round(response.data.main.temp_min),
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            
            
        })
        
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
                    <WeatherData data={weatherData} />
                    
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