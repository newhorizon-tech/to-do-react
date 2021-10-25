import TodoItem from './todo-item';

const TodoList = () => {
  const tasks =  [{description : "Item One", status: false, index: 1 },
            {description : "Item Two", status: false, index: 2 },
            {description : "Item Three", status: false, index: 3 },
            {description : "Item Four", status: false, index: 4 },]
  // const {tasks} = props;

  return(
    <ul id = "todo-list">
      {tasks.map((task) => (<TodoItem task={task} />))}
    </ul>
  );
}

export default TodoList;
