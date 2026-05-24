import {
FaCheckCircle,
FaTimesCircle,
FaExclamationTriangle,
FaInfoCircle
} from "react-icons/fa";

export default function ToastItem({id, message, type, removeButtonToast}) {
    return (
        <div className={`toast ${type}`}>
            
            <p>
                {type === "success" && <FaCheckCircle />}
                {type === "error" && <FaTimesCircle />}
                {type === "warning" && <FaExclamationTriangle />}
                {type === "info" && <FaInfoCircle />}
                {message}
                <button 
                className="remove-btn"
                onClick={() => removeButtonToast(id)}
                >X</button>
            </p>
        </div>
    );
}