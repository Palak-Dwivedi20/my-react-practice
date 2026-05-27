import "./SearchBox.css";

export default function WeatherSearch({search, setSearch, getData}) {

    let handleOnKeyDown = (e) => {
        if(e.key === "Enter") {
            getData();
        }
    }

    return (
        <div className="search-box ">
            <input type="text" 
            placeholder="Enter City"
            value={search} 
            onKeyDown={handleOnKeyDown}
            onChange={(e) => setSearch(e.target.value)} />

            <button onClick={getData}>Search</button>
        </div>
    );
}