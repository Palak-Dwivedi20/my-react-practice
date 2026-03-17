export default function TodoItem({
  id,
  task,
  completed,
  completeTask,
  editId,
  editTask,
  setEditTask,
  startEdit,
  save,
  deleteTask
}) {
  return (
    <li className="item">
      {editId === id ? (
        <div className="edit-box">
          <input
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button onClick={() => save(id)}>
            <i className="fa-solid fa-check"></i>
          </button>
        </div>
      ) : (
        <>
          <span className={completed ? "done" : ""}>{task}</span>

          <div className="actions">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => completeTask(id)}
            />
            <button onClick={() => startEdit(id, task)}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button onClick={() => deleteTask(id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}