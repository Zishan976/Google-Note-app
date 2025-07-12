import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Note(props) {
  return (
    <div className="note">
      <h1 className={props.isChecked ? "checked" : undefined}>{props.title}</h1>
      <p className={props.isChecked ? "checked" : undefined}>{props.content}</p>
      <div className="btns">
        <button onClick={props.onDelete}>
          <DeleteIcon />
        </button>
        <button onClick={props.onCheck}>
          <CheckCircleIcon />
        </button>
      </div>

    </div>
  );
}
export default Note;
