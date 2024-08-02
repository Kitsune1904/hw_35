/* const NoteItem = (props) => {
  return (
    <li data-index={props.id}>
      {props.note} 
      <button onClick={props.delete}>Delete note</button>
    </li>
  );
}; */

const NoteItem = (props) => {
    return (
      <li>
        {props.note} 
        <button onClick={props.delete}>Delete note</button>
      </li>
    );
  };

export default NoteItem;
