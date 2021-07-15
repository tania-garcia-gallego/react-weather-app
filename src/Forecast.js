
import axios from "axios";
import React , { useState , useEffect } from "react";

import ForecastDay from "./ForecastDay.js";




export default function Forecast(props) {
    
    let [forecastLoaded, setForecastLoaded] = useState("");
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => { 
       setForecastLoaded(false);
    }, [props.coordinates] )

    function handleResponse(response){
        setForecastData(response.data.daily);
        setForecastLoaded(true); 
    }

    if(forecastLoaded) {
         return (
<div className="row">
    
    {forecastData.map(function(dailyForecast, index){
        if (index < 6) {
        return <ForecastDay data={dailyForecast}/>}
        return null;
    })}
      
        </div>
    
    )
    }
 else {
    let apiKey = "bb02dbe52bd8f35d93498e6a86d1fcd5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
    return "Our weather elves are looking for the forecast, one moment, please";
   }

   
}
