import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function ExpenseItem({
    id, 
    name, 
    amount, 
    editId,
    editData,
    editHandleChange,
    start,
    save,
    cancel,
    deleteExpense
}) {
    return (
        <div className="expense-item">
            {editId === id ? (
                <div>
                    <input className="expense-input" type="text" name="editName" value={editData.editName} onChange={editHandleChange} />
                    <input className="expense-input" type="number" name="editAmount" value={editData.editAmount} onChange={editHandleChange} />
                    <button className="submit-btn" onClick={() => save(id)}>Save</button>
                    <button className="submit-btn" onClick={cancel}>Cancel</button>
                </div>
            ) : (
                <div className="expense-info">
                    <h3>Name: {name}</h3>
                    <p>Amount: ₹{amount}
                        <button className="icon-btn" onClick={() => start(id, name, amount)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="icon-btn" onClick={() => deleteExpense(id)}>
                            <FontAwesomeIcon icon={faTrashCan} 
                            /></button>
            </p>
                </div>
            )}

        </div>
    )
}