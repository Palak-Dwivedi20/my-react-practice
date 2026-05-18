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
        <div>
            {editId === id ? (
                <div>
                    <input type="text" name="editName" value={editData.editName} onChange={editHandleChange} />
                    <input type="number" name="editAmount" value={editData.editAmount} onChange={editHandleChange} />
                    <button onClick={() => save(id)}>Save</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h2>Name: {name}</h2>
                    <p>Amount: ₹{amount}
                        <button onClick={() => start(id, name, amount)}>Edit</button>
                        <button onClick={() => deleteExpense(id)}>Delete</button>
            </p>
                </div>
            )}

        </div>
    )
}