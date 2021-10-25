import {useState} from 'react';
import TodoItem from './todo-item';
import InputTodo from './input-todo';
import './todo-list.css';

const TodoList = () => {
  const initialTasks =  [{description : "Item One", status: false, index: 1 },
            {description : "Item Two", status: false, index: 2 },
            {description : "Item Three", status: false, index: 3 },
            {description : "Item Four", status: false, index: 4 },]

  const [tasks, setTask] = useState(initialTasks);

  const addTask = (e) => {
     e.preventDefault();
     const inputElement = e.target.querySelector("input")
     const taskDescription = inputElement.value;
     inputElement.value = '';

     const newTask = {description : taskDescription, status: false };
     setTask(prevTasks => [...prevTasks, {...newTask, index: prevTasks.length +1}]);
  }

  return(
    <>
      <ul id = "todo-list">
        <InputTodo addTask ={addTask} /> 
        {tasks.map((task) => (<TodoItem key={task.index} task={task} />))}
      </ul>
    < />
  );
}

export default TodoList;
