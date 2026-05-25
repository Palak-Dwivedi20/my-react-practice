import { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";

export default function WeatherApp() {
    let [weather, setWeather] = useState(null);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");


    async function getData () {
        try {
            setLoading(true);
            setError("");

            let res = await axios.get(
                `https://wttr.in/${search}?format=j1`
            );
            console.log(res.data);
            setWeather(res.data);
            setSearch("");
        } catch (err) {
            setError("City not found");;
        } finally {
            setLoading(false);
        }
    }

   
    return (
        <div className="weather-container">
            <h1>Wether App</h1>

            <WeatherSearch
            search={search}
            setSearch={setSearch}
            getData={getData}
            />

             {loading && <p>Loading...</p>}
             {error && <p>{error}</p>}

            {weather && (
                <WeatherCard
                weather={weather}
                />
            )}
        </div>
    );
}