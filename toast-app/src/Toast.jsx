import { useState } from "react";

import "./Toast.css"
import ToastContainer from "./ToastContainer";
import Buttons from "./Buttons";

export default function Toast() {
    let [toast, setToast] = useState([]);

    let showToast = (message, type) => {
        let notification = {
            id: Date.now(),
            message,
            type
        }

        setToast((prev) => {
            return [...prev, notification];
        });

        setTimeout(() => {
            setToast((prev) => {
                return prev.filter((t) => {
                    return t.id !== notification.id
                })
            })
        }, 3000);

    }

    let removeButtonToast = (id) => {
        setToast((prev) => {
            return prev.filter((t) => {
                return t.id !== id
            })
        })
    }

    return (
        <div>
            <h1>Toast App</h1>

            <ToastContainer 
            toast={toast}
            removeButtonToast={removeButtonToast}
            />

            <Buttons 
            showToast={showToast}
            />
        </div>
    )
}