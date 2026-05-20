export default function MovieSearch({
    search,
    setSearch,
    getMovie,
    handleOnKeyDown
}) {

    return (
        <div>

            <input
                type="text"
                placeholder="Search movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleOnKeyDown}
            />

            <button onClick={getMovie}>
                Search
            </button>

        </div>
    );
}