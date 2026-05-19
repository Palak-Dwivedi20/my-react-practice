import { useEffect, useState } from "react";
import { v4 as uuidv4} from "uuid";
import ExpenseForm from "./ExpenseFrom";
import ExpenseList from "./ExpenseList";
import  "./ExpenseApp.css";

export default function ExpenseApp() {
    let [expenses, setExpenses] = useState(() => {
        try {
            let saved = localStorage.getItem("expenses");
            return saved ? JSON.parse(saved) : [];
        } catch (err) {
            console.log("err", err);
        }
    });
    let [editId, setEditId] = useState(null);
    let [editData, setEditData] = useState({
        editName: "",
        editAmount: ""
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses]);

    let addExpense = (expense) => {
        setExpenses(prev => [...prev, {...expense, id: uuidv4(), amount: Number(expense.amount)
        }]);
    }

    let editHandleChange = (e) => {
        setEditData((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        });
    }

    let start = (id, name, amount) => {
        setEditId(id);
        setEditData({
            editName: name,
            editAmount: amount
        });
    }

    let save = (id) => {
        let updateExpense = expenses.map((exp) => (
            exp.id === id ? {...exp, name: editData.editName, amount: Number(editData.editAmount)} : exp
        ));
        setExpenses(updateExpense);
        setEditId(null);
        setEditData({
            editName: "",
            editAmount: ""
        });
    }

    let cancel = () => {
        setEditId(null);
        setEditData({
            editName: "",
            editAmount: ""
        });
    }

    let deleteExpense = (id) => {
        setExpenses(expenses.filter((exp) => exp.id !== id));
    }

    let total = expenses.reduce((acc, exp) => acc + exp.amount , 0);

    return (
        <div className="expense-container">
            <h1>Expense App</h1>

            <ExpenseForm 
            addExpense={addExpense}
            />

            <ExpenseList 
            expenses={expenses}
            editId={editId}
            editData={editData}
            editHandleChange={editHandleChange}
            start={start}
            save={save}
            cancel={cancel}
            deleteExpense={deleteExpense}
            />

           {expenses.length > 0 && <p className="total-text">Total Amount: ₹{total}</p> }
        </div>
    );
}