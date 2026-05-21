export default function MovieSearch({
search,
setSearch,
getMovie,
handleOnKeyDown
}) {

return (
    <div>

        <input
            className="search-input"
            type="text"
            id="movie"
            name="movie"
            placeholder="Search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleOnKeyDown}
        />

        <button
            type="button"
            className="search-btn"
            onClick={getMovie}
        >
            Search
        </button>

    </div>
);

}