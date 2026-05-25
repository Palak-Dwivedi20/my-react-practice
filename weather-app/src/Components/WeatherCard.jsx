import "./WeatherCard.css";

export default function WeatherCard({
    weather
}) {

    return (

        <div className="weather-card">

            <p>
                Temp:
                {
                    weather.current_condition[0].temp_C
                }°C
            </p>

            <p>
                Wind:
                {
                    weather.current_condition[0].windspeedKmph
                } km/h
            </p>

            <p>
                Description:
                {
                    weather.current_condition[0]
                    .weatherDesc[0].value
                }
            </p>

        </div>
    );
}