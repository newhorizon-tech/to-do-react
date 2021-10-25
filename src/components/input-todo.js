const InputTodo = (props) => {
  const addTask = props.addTask;
  return(
    <form id="input-todo" onSubmit={addTask}  >
     <input type="text" placeholder = "New Task"/>
     <button type="submit"> Add Task </button>
    </form>
  )
}

export default InputTodo
