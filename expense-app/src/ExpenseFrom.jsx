import { useState } from "react";

export default function ExpenseForm({addExpense}) {
    let [expenseData, setExpenseData] = useState({
        name: "",
        amount: ""
    });

    let handleInputChange = (e) => {
        
        setExpenseData((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        addExpense(expenseData);
        setExpenseData({
            name: "",
            amount: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" placeholder="Enter product name" value={expenseData.name} onChange={handleInputChange} />
            <br></br>
            <label htmlFor="amount">Amount: </label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount" value={expenseData.amount} onChange={handleInputChange} />
            <br></br>
            <button type="submit">Show Data</button>
        </form>
    );
}