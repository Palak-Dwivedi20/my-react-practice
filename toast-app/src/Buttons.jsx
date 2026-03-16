export default function Buttons({ handleClick }) {
    return (
        <div>
            <button onClick={() => handleClick("Saved Successfully!", "success")}>
                Show Data
            </button> 

            <button onClick={() => handleClick("Something went wrong!", "error")}>
                Error
            </button>

            <button onClick={() => handleClick("Warning message!", "warning")}>
                Show Warning
            </button>
        </div>
    );
}