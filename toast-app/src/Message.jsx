import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Message({ message, type, timer, closeToast }) {

  let icon;

  if (type === "success") {
    icon = <FaCheckCircle />;
  }
  else if (type === "error") {
    icon = <FaTimesCircle />;
  }
  else {
    icon = <FaExclamationTriangle />;
  }

  return (
    <div
      className={`toast ${type}`}
      onMouseEnter={() => clearTimeout(timer)}
    >

      <span className="icon">{icon}</span>

      <span className="text">{message}</span>

      <span className="close" onClick={closeToast}>✖</span>

    </div>
  );
}