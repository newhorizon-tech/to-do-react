const TodoItem = (props) => {
  console.log(props);
  const {task} = props;

  const deleteItem = (e) => {
    console.log("Delete" + e.target);
  }

  const statusItem = (e) => {
    console.log("Toggle Status" + e.target)
  }

  return(
    <li className = "todo-item">
      <input  className="item-status" type = "checkbox" onClick = {statusItem} />
      <span className="item-delete"> {task.description} </span>
      <button className="item-delete" onClick = {deleteItem} > Delete </button>
    </li>
  );
}

export default TodoItem;
