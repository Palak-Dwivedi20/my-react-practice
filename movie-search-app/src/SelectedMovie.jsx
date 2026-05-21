export default function SelectedMovie({
selectedMovie
}) {

return (

    <>
        {selectedMovie && (

            <div className="selected-movie">

                <h2>{selectedMovie.name}</h2>

                <p>Type: {selectedMovie.type}</p>

                <p>Language: {selectedMovie.language}</p>

                <img
                    src={
                        selectedMovie.image?.medium ||
                        "https://dummyimage.com/100x150/cccccc/000000&text=No+Image"
                    }
                    alt={selectedMovie.name}
                />

                <p
                    dangerouslySetInnerHTML={{
                        __html:
                        selectedMovie.summary ||
                        "No summary available"
                    }}
                ></p>

            </div>
        )}
    </>
);

}