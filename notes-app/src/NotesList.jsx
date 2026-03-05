import NotesItem from "./NotesItem";

export default function NotesList({notes,  toggleExpand, deleteNote, editId, editData, editHandleChange, 
 startEdit, save, cancelEdit
}) {
    return (
        <div>
            {notes.map((n) => (
                <NotesItem 
                key={n.id}
                id={n.id}
                title={n.title}
                description={n.description}
                expanded={n.expanded}
                toggleExpand={toggleExpand}
                editId={editId}
                editData={editData}
                editHandleChange={editHandleChange}
                startEdit={startEdit}
                save={save}
                cancelEdit={cancelEdit}
                deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}