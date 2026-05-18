import ExpenseItem from "./ExpenseItem"

export default function ExpenseList({
    expenses, 
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
            {expenses.map((exp) => (
                <ExpenseItem 
                key={exp.id}
                id={exp.id}
                name={exp.name}
                amount={exp.amount}
                editId={editId}
                editData={editData}
                editHandleChange={editHandleChange}
                start={start}
                save={save}
                cancel={cancel}
                deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
}