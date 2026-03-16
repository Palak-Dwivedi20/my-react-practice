import { useState } from "react";
import Message from "./Message";
import Buttons from "./Buttons";
import "./toast.css";

export default function Toast() {

  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleClick = (msg, toastType) => {

    const id = Date.now();

    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    const newToast = {
      id,
      message: msg,
      type: toastType,
      timer
    };

    setToasts((prev) => [...prev, newToast]);
  };

  return (
    <div className="page">

      <h1>Toast Notification</h1>

      <Buttons handleClick={handleClick} />

      <div className="toast-container">

        {toasts.map((toast) => (
          <Message
            key={toast.id}
            message={toast.message}
            type={toast.type}
            timer={toast.timer}
            closeToast={() => removeToast(toast.id)}
          />
        ))}

      </div>

    </div>
  );
}