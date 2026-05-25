import "./SearchBox.css";

export default function WeatherSearch({search, setSearch, getData}) {
    return (
        <div className="search-box ">
            <input type="text" 
            placeholder="Enter City"
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />

            <button onClick={getData}>Search</button>
        </div>
    );
}