import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import FilterButton from "./FilterButton";
import { v4 as uuidv4 } from "uuid";
import "./TodoApp.css";

export default function TodoApp() {
  let [todos, setTodos] = useState(() => {
    try {
      let saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  let [editId, setEditId] = useState(null);
  let [editTask, setEditTask] = useState("");
  let [filter, setFilter] = useState("all");
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode])

  let addTask = (task) => {
    setTodos(prev => [...prev, { ...task, id: uuidv4(), completed: false }]);
  };

  let completeTask = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  let startEdit = (id, task) => {
    setEditId(id);
    setEditTask(task);
  };

  let save = (id) => {
    if (editTask.trim() === "") return;
    setTodos(todos.map(t => t.id === id ? { ...t, task: editTask } : t));
    setEditId(null);
    setEditTask("");
  };

  let deleteTask = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  let clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };

  let filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="card">
        <h1>Todo App</h1>

        <TodoForm addTask={addTask} />

        <TodoList
          todos={filteredTodos}
          completeTask={completeTask}
          editId={editId}
          editTask={editTask}
          setEditTask={setEditTask}
          startEdit={startEdit}
          save={save}
          deleteTask={deleteTask}
        />

        <FilterButton setFilter={setFilter} filter={filter} />

        {todos.some(t => t.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            <i className="fa-solid fa-trash"></i>
          </button>
        )}

        <p className="count">
          {todos.filter(t => !t.completed).length} tasks left
        </p>

        <button  className="toggle-btn"
         onClick={() => setDarkMode(!darkMode)}
         >
            {darkMode ? "☀️" : "🌙"}
            </button>
      </div>
    </div>
  );
}