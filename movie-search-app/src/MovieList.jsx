import MovieCard from "./MovieCard";

export default function MovieList({
    movies,
    setSelectedMovie
}) {

    return (
        <div className=".movie-list">

            {movies.map((movie) => (

                <MovieCard
                    key={movie.show.id}
                    movie={movie}
                    setSelectedMovie={setSelectedMovie}
                />

            ))}

        </div>
    );
}