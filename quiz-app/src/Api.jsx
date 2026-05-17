import { useState } from "react";
import axios from "axios";

export default function Api() {
  let [movies, setMovies] = useState([]);
  let [movie, setMovie] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [hasSearched, setHasSearched] = useState(false);
  let [selectedMovie, setSelectedMovie] = useState(null);

  let handleSearch = async () => {
    try {
      if (!movie.trim()) return;

      setLoading(true);
      setError(null);

      let res = await axios.get(
        `https://imdb.iamidiotareyoutoo.com/search?q=${movie}`
      );

      setMovies(res.data.description || []);
      setMovie("");
      setHasSearched(true);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  let keyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Movie App</h1>

      <input
        type="text"
        placeholder="Search movie"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        onKeyDown={keyDown}
      />

      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {/* 🔥 GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
        }}
      >
        {movies.map((m, i) => (
          <div
            key={i}
            onClick={() => setSelectedMovie(m)}
            style={{ border: "1px solid gray", padding: "10px", cursor: "pointer" }}
          >
            <img
              src={m["#IMG_POSTER"]}
              width="100"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/100")
              }
            />
            <p>{m["#TITLE"]}</p>
            <p>{m["#YEAR"]}</p>
          </div>
        ))}
      </div>

      {/* 🔥 SELECTED MOVIE DETAIL */}
      {selectedMovie && (
        <div style={{ border: "2px solid black", margin: "20px", padding: "10px" }}>
          <h2>{selectedMovie["#TITLE"]}</h2>

          <img
            src={selectedMovie["#IMG_POSTER"]}
            width="150"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/150")
            }
          />

          <p>Actors: {selectedMovie["#ACTORS"]}</p>
          <p>Year: {selectedMovie["#YEAR"]}</p>

          <button onClick={() => setSelectedMovie(null)}>Close</button>
        </div>
      )}

      {hasSearched && !loading && movies.length === 0 && (
        <p>No result found.</p>
      )}
    </div>
  );
}