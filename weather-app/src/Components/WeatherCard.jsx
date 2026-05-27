import "./WeatherCard.css";

import { FaSun ,  FaCloud, FaCloudRain } from "react-icons/fa";

export default function WeatherCard({
    weather
}) {

    let weatherType = weather.current_condition[0].weatherDesc[0].value;

    let cardClass = weatherType.includes("Sunny") ? "sunny" 
    : weatherType.includes("Cloud") ? "cloudy" : "rainy";

    return (

        <div className={`weather-card ${cardClass}`}>

            <div className="weather-icon">

                {
                    weatherType.includes("Sunny") 
                    ? <FaSun /> 
                    : weatherType.includes("Cloud") 
                    ? <FaCloud />
                    : <FaCloudRain />
                }

            </div>

            <h2>{weatherType}</h2>

            <p>
                Temp: {weather.current_condition[0].temp_C}°C
                </p>
                
                <p>
                    Humidity: {weather.current_condition[0].humidity}%
                    </p>

                    <p>
                        Feels Like:
                        {weather.current_condition[0].FeelsLikeC}°C
                        </p>
                    
                    <p>
                        Wind: {weather.current_condition[0].windspeedKmph} km/h
                        </p>

                        
                        <p>
                            Description:
                            {weather.current_condition[0].weatherDesc[0].value}
                            </p>

        </div>
    );
}