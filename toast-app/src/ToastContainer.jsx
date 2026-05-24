import ToastItem from "./ToastItem"

export default function ToastContainer({toast, removeButtonToast}) {
    return (
        <div className="toast-container">
            {toast.map((t) => (
                <ToastItem 
                key={t.id}
                id={t.id}
                message={t.message}
                type={t.type}
                removeButtonToast={removeButtonToast}
                />
            ))}
        </div>
    );
}