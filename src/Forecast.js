import axios from "axios";
import React , { useState } from "react";

import ForecastDay from "./ForecastDay.js";




export default function Forecast(props) {
    
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function handleResponse(response){
        setForecastData(response.data.daily);
        setForecastLoaded(true); 
    }

    if(forecastLoaded) {
         return (

            <ForecastDay data={forecastData[1]}/>
            
        
    
    )
    }
 else {
     let apiKey = "751305c75f9526727cdf4f36e45a4e75";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    

    return "Our weather elves are looking for the forecast, one moment, please";
   }

   
}
