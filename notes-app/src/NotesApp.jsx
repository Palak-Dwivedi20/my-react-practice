import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function NotesApp() {
    let [notes, setNotes] = useState([]);
    
    let [loading , setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [editId, setEditId] = useState(null);
    let [editData, setEditData] = useState({
    editTitle: "",
    editDescription: ""
});
let [search, setSearch] = useState("");

    let filterNotes = notes.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))


    async function getNotes() {
    try {
      setLoading(true);
      setError(null);
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      let resApi = res.data.map((n) => {
        return {
          id: uuidv4(),    
          title : n.title,
          description: n.body,
          expanded: false
        }
      })
      setNotes(resApi);
    } catch (err) {
      setError("something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      getNotes();
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

    
    let addNotes = (note) => {
        setNotes(prev => [...prev, {id: uuidv4(), ...note, expanded: false}]);
    }

    let toggleExpand = (id) => {
        let updateNote = notes.map((n) => (
            n.id === id ? {...n, expanded: !n.expanded} : n
        ));
        setNotes(updateNote);
    }

    let editHandleChange = (e) => {
        setEditData(prev => {
            return {...prev, [e.target.name] : e.target.value}
        });
    }

    
    let startEdit = (id, title, description) => {
        setEditId(id);
        setEditData({
            editTitle: title,
            editDescription: description
        });
    }

    let save = (id) => {
        let updateNote = notes.map((n) => (
            n.id === id ? {...n, title: editData.editTitle, description: editData.editDescription} : n
        ));
        setNotes(updateNote);
        setEditId(null);
        setEditData({
            editTitle: "",
            editDescription: ""
        });
    }

    let cancelEdit = () => {
        setEditId(null);
        setEditData({
            editTitle: "",
            editDescription: ""
        });
    }

    let deleteNotes = (id) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    }


    return (
        <div>
            <h1>Notes App.</h1>
            <p>Total Notes: {notes.length}</p>
            <p>Showing {filterNotes.length} of {notes.length} notes</p>
            <input type="text" placeholder="Search notes..." value={search} onChange={(e) => setSearch(e.target.value) }/>
            <br></br> <br></br>
            <NotesForm addNotes={addNotes} />
            {filterNotes.length === 0 ? (
                <p>No results found.</p>
            ) : (
            <NotesList 
            notes={filterNotes}
            toggleExpand={toggleExpand}
            editId={editId}
            editData={editData}
            editHandleChange={editHandleChange}
            startEdit={startEdit}
            save={save}
            cancelEdit={cancelEdit}
            deleteNote={deleteNotes}
            />
            )}
           
        </div>
    );
}

