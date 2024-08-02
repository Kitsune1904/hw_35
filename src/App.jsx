import { useCallback, useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteItem";

function App() {
  const [notesArr, setNotesArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const clickHandler = () => {
    if (inputVal != '') {
      setNotesArr([...notesArr, inputVal]);
    } else {
      alert('Fild can\`t be empty')
    }
    setInputVal("");
  };

  const inputHandler = useCallback((event) => {
    const inputNote = event.target.value;
    setInputVal(inputNote);
  }, []);

  const deleteNote = useCallback((event) => {
    const deletedNote = Number(event.target.getAttribute('data-index'));
    notesArr.splice(deletedNote, 1);
    setNotesArr([...notesArr])
  }, [notesArr])

  return (
    <>
      <div className="inputHolder">
        <input
          type="text"
          maxLength={20}
          value={inputVal}
          onChange={inputHandler}
        ></input>
        <button onClick={clickHandler}>Add note</button>
      </div>
      <div className="notesListHolder">
        {notesArr.length == 0 ? 
        <p>Notes list is empty</p> :
        <NoteList>
          {notesArr.map((note, index)=> <NoteItem key={index} id={index} note={note} delete={(event) => deleteNote(event)}/>)}
        </NoteList>
        }  
      </div>
    </>
  );
}

export default App;
