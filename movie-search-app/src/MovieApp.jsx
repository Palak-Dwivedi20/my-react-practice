import { useState } from "react";
import axios from "axios";


import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import SelectedMovie from "./SelectedMovie";

export default function MovieApp() {

    let [movies, setMovies] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [selectedMovie, setSelectedMovie] = useState(null);
    let [hasSearched, setHasSearched] = useState(false);

    async function getMovie() {

        if(!search) return;

        try {

            setLoading(true);
            setError(null);
            setHasSearched(true);

            let res = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${search}`
            );

            setMovies(res.data);

            setSearch("");

        } catch (err) {

            setError("Something went wrong!");

        } finally {

            setLoading(false);
        }
    }

    let handleOnKeyDown = (e) => {

        if(e.key === "Enter") {
            getMovie();
        }
    }

    return (
        <div className="movie-container">

            <h1>Movie App</h1>

            <MovieSearch
                search={search}
                setSearch={setSearch}
                getMovie={getMovie}
                handleOnKeyDown={handleOnKeyDown}
            />

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            <MovieList
                movies={movies}
                setSelectedMovie={setSelectedMovie}
            />

            <SelectedMovie
                selectedMovie={selectedMovie}
            />

            {hasSearched && movies.length === 0 && !loading && (
                <p>No movies found</p>
            )}

        </div>
    );
}