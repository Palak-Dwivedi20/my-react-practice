export default function NotesItem({id, title, description, expanded,  toggleExpand, deleteNote,
    editId, editData, editHandleChange, startEdit, save, cancelEdit
}) {
    return (
        <div>
            {editId === id ? (
                <div>
                    <input type="text" name="editTitle" value={editData.editTitle} onChange={editHandleChange} />
                    <input type="text" name="editDescription" value={editData.editDescription} onChange={editHandleChange} />
                    <button onClick={() => save(id)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>Title: {title}</h3>
                    <p>Description: {expanded ? description : description.slice(0, 20) + ""}</p>
                    <button onClick={() =>toggleExpand(id)}>{expanded ? "Show less" : "Read more"}</button>
                    <button onClick={() => startEdit(id, title, description)}>Edit</button>
                    <button onClick={() => deleteNote(id)}>Delete</button>
                </div>
            )}
            
        </div>
    );
}