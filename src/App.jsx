import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import { getLocalStorage, setLocalStorage } from "./NoteLocalStorage";

function App() {
  const [contents, setContents] = useState(() => getLocalStorage());

  useEffect(() => {
    setLocalStorage(contents);
  }, [contents]);

  function addNote(newNote) {
    setContents((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteContent(id) {
    setContents((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function checkContent(id) {
    const newContents = [...contents];
    newContents[id].isDone = !newContents[id].isDone;
    setContents(newContents);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {contents.map((content, index) => (
          <Note
            key={index}
            title={content.title}
            content={content.content}
            onDelete={() => deleteContent(index)}
            onCheck={() => checkContent(index)}
            isChecked={contents[index].isDone}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
