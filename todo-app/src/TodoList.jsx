import TodoItem from "./TodoItem"

export default function TodoList({todos, 
    completeTask, 
    deleteTask, 
    editId,
    editTask,
    setEditTask,
    startEdit,
    save,
    cancelEdit
})
    {
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    completeTask={completeTask}
                    editId={editId}
                    editTask={editTask}
                    setEditTask={setEditTask}
                    startEdit={startEdit}
                    save={save}
                    cancelEdit={cancelEdit}
                    deleteTask={deleteTask}
                    />
        ))}
        </ul>
        </div>
    );
}