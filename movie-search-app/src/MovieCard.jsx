export default function MovieCard({
movie,
setSelectedMovie,
selectedMovie
}) {

return (
    <div
        className={`movie-card ${
            selectedMovie?.id === movie.show.id
                ? "active-card"
                : ""
        }`}
        onClick={() => setSelectedMovie(movie.show)}
    >

        <p>Movie Name: {movie.show.name}</p>

        <p>Type: {movie.show.type}</p>

        <p>Language: {movie.show.language}</p>

        <img
            src={
                movie.show.image?.medium ||
                "https://dummyimage.com/100x150/cccccc/000000&text=No+Image"
            }
            alt={movie.show.name}
        />

    </div>
);

}