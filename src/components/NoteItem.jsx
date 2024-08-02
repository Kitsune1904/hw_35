const NoteItem = (props) => {
    console.log(props.id)
  return (
    <li><span>{props.note}</span>
      <button data-index={props.id} onClick={props.delete}>Delete note</button>
    </li>
  );
};

export default NoteItem;
