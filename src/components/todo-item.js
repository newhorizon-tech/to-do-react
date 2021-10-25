const TodoItem = (props) => {
  const {task, deleteItem} = props;

  const deleteItem = (e) => {
    console.log(e.target.parentElement);
  }

  const statusItem = (e) => {
    console.log(e.target.parentElement)
  }

  return(
    <li className = "todo-item" id= {`item-${task.index}`}>
      <input  className="item-status" type = "checkbox" onClick = {statusItem} />
      <span className="item-delete"> {task.description} </span>
      <button className="item-delete" onClick = {deleteItem} > Delete </button>
    </li>
  );
}

export default TodoItem;
