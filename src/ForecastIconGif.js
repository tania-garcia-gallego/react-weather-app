import React from "react";

export default function ForecastIconGif(props){
     const iconGifMap = {
        "01d" : "https://media.giphy.com/media/LVsi0kq0KNet3vDPLa/giphy.gif",
        "01n" : "https://media.giphy.com/media/FlodpfQUBSp20/giphy.gif",
        "02d" : "https://media.giphy.com/media/G1T5M0qT6ZJlu/giphy.gif",
        "02n" : "https://media.giphy.com/media/9G4cqwcLC8TZDw7Hba/giphy.gif",
        "03d" : "https://media.giphy.com/media/5HK4TiiBeLSZq/giphy.gif",
        "03n" : "https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif",
        "04d" : "https://media.giphy.com/media/5HK4TiiBeLSZq/giphy.gif",
        "04n" : "https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif",
        "09d" : "https://media.giphy.com/media/l3vR7Cqp7MsqGDmqQ/giphy.gif",
        "09n" : "https://media.giphy.com/media/PbOaO2fedzQLm/giphy.gif",
        "10d" : "https://media.giphy.com/media/xMkWcQ9xTGH8A/giphy.gif",
        "10n" : "https://media.giphy.com/media/PbOaO2fedzQLm/giphy.gif",
        "11d" : "https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif",
        "11n" : "https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif",
        "13d" : "https://media.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif",
        "13n" : "https://media.giphy.com/media/12joL15WhHBvl6/giphy.gif",
        "50d" : "https://media.giphy.com/media/McDhCoTyRyLiE/giphy.gif",
        "50n" : "https://media.giphy.com/media/McDhCoTyRyLiE/giphy.gif",
    };
    let url = iconGifMap[props.code];
    if (url === undefined) {url="https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif"} 
    return (<img src={url} alt="weather gif" width="100" className="card-img"/>);

}