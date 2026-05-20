export default function SelectedMovie({
    selectedMovie
}) {

    return (

        <>
            {selectedMovie && (

                <div className="selected-movie">

                    <h2>Selected Movie</h2>

                    <p>Name: {selectedMovie.name}</p>

                    <p>Type: {selectedMovie.type}</p>

                    <p>Language: {selectedMovie.language}</p>

                    <img
                        src={
                            selectedMovie.image?.medium ||
                            "https://dummyimage.com/100x150/cccccc/000000&text=No+Image"
                        }

                        alt={selectedMovie.name}

                        width="200px"
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