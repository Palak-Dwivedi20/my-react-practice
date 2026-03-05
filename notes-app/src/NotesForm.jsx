import { useState } from "react";

export default function NotesForm({addNotes}) {
    let [noteData, setNoteData] = useState({
        title: "",
        description: ""
    });
    let [isValid, setIsValid] = useState(false);

    let handelChange = (e) => {
        setNoteData(prev => {
            return {...prev, [e.target.name] : e.target.value}
        });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
       
        if(noteData.title.trim() === "" || noteData.description.trim() === "") {
            setIsValid(true);
            return;
        }
        setIsValid(false);
        addNotes(noteData);
        setNoteData({title: "", description: ""});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" placeholder="Add title" value={noteData.title} onChange={handelChange} />
                <br></br><br></br>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description" placeholder="Add description" value={noteData.description} onChange={handelChange} />
                <br></br>
                {isValid && <p>Please fill all details correctly.</p>}
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}

