import React from "react";
import ForecastIconGif from "./ForecastIconGif.js";
import "./ForecastDay.css";

export default function ForecastDay(props){
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return weekDays[day];
    }
    return (
        <div className="card forecast">
              <div className="forecastDay">
                    {day()}
                </div >
                
                <ForecastIconGif  code={props.data.weather[0].icon}/>
                
               <div>
                <span className=" forecastMaxTemp">{Math.round(props.data.temp.max)}°C</span>
                <span className="forecastMinTemp">{Math.round(props.data.temp.min)}°C</span>
                </div>
        </div>
    )
}