const TodoItem = (props) => {
  const {task, deleteTask} = props;

  const statusItem = (e) => {
    console.log(e.target.parentElement)
  }

  return(
    <li className = "todo-item" id= {`item-${task.index}`}>
      <input  className="item-status" type = "checkbox" onClick = {statusItem} />
      <span className="item-description"> {task.description} </span>
      <button className="item-delete" onClick = {deleteTask} > Delete </button>
    </li>
  );
}

export default TodoItem;
