import { useState, useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    isDone: false,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isExpanded &&
        formRef.current &&
        !formRef.current.contains(event.target) &&
        note.title === "" &&
        note.content === ""
      ) {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, note]);

  return (
    <div>
      <form
        ref={formRef}
        className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(note);
          setNote({ title: "", content: "", isDone: false });
          setIsExpanded(false);
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
          style={{ display: isExpanded ? "block" : "none" }}
        />
        <textarea
          onClick={() => {
            setIsExpanded(true);
          }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded} timeout={200}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
