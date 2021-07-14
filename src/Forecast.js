import axios from "axios";
import React , { useState } from "react";
import "./Forecast.css"

export default function Forecast(props) {
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    function handleResponse(response){
        setForecastData(response.data.daily);
        setForecastLoaded(true);
    }
    if(forecastLoaded) {
         return (
        <div className="row forecast">
            <div className="col">
                <div className="forecastDay">
                    Thursday
                </div>
                <img src="https://media.giphy.com/media/l3vR7Cqp7MsqGDmqQ/giphy.gif" alt="weather gif" width="100" />
               <div>
                <span className="forecastMaxTemp">24°C </span>
                <span className="forecastMinTemp"> 19°C</span>
                </div>
            </div>

            

        </div>
    )

    }
    else {
        let apiKey = "751305c75f9526727cdf4f36e45a4e75";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Our weather elves are looking for the forecast, one moment, please";
   }
}
