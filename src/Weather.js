import React, { useState }from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast.js";
import WeatherData from "./WeatherData.js";

export default function Weather(props) {
    const [ city, setCity] = useState(props.defaultCity);
    const [ready, setReady] = useState(false);
    const [ weatherData , setWeatherData] = useState({});
    function handleResponse(response) {
        
        setWeatherData({
            temperature: Math.round(response.data.main.temp),
            wind: Math.round(response.data.wind.speed),
            maxTemp: Math.round(response.data.main.temp_max),
            minTemp: Math.round(response.data.main.temp_min),
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            coordinates: response.data.coord,
        })
        setReady(true);
    }

    function search(){
         const apiKey = "bb02dbe52bd8f35d93498e6a86d1fcd5";
         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCity(event) {
        setCity(event.target.value);
    }

    if(ready) {
 return (
        <div className="Weather container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter a city" className="enterCity" onChange={handleCity}/>
                            <input type="submit" value="Search" className="search" />

                        </form>
                        
                    </div>
                    <WeatherData data={weatherData} />
                    
                    <div className="row">
                        <Forecast coordinates={weatherData.coordinates}/>

                    </div>


                </div>
            </div>
        </div>
    )
    } else {
       search();
    return"Our weather elves are working on your request, one moment please";
    }

  
   
}