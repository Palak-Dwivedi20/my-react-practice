import { useState } from "react";

export default function ExpenseForm({addExpense}) {
    let [expenseData, setExpenseData] = useState({
        name: "",
        amount: ""
    });
    let [isValid, setIsValid] = useState(false);

    let handleInputChange = (e) => {
        
        setExpenseData((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        if(expenseData.name.trim() === "" || expenseData.amount.trim() === "") {
            setIsValid(true);
            return;
        }

        setIsValid(false);
        addExpense(expenseData);
        setExpenseData({
            name: "",
            amount: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input className="expense-input" type="text" name="name" id="name" placeholder="Enter product name" value={expenseData.name} onChange={handleInputChange} />
            <br></br>
            <label htmlFor="amount">Amount: </label>
            <input className="expense-input" type="number" name="amount" id="amount" placeholder="Enter amount" value={expenseData.amount} onChange={handleInputChange} />
            <br></br>
            <button className="submit-btn" type="submit">Add Expense</button>
             {isValid && <p className="error-text">Please fill all details carefully.</p>}
        </form>
    );
}