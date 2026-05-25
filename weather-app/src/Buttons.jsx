export default function Buttons({showToast}) {
    return (
        <div className="btn-container">

        <button onClick={() => {
            showToast("Login Successfull", "success")
        }}>
        Success Toast
        </button>

        <button onClick={() => {
            showToast("Something went worng", "error")
        }}>
        Error Toast
        </button>

        <button onClick={() => {
            showToast("Invalid input", "warning")
        }}
        >Warning Toast</button>

        <button onClick={() => {
            showToast("New message recevied", "info")
        }}>Info toast</button>

        </div>
    );
}