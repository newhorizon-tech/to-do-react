import { useState, useEffect } from 'react';
import TodoItem from './todo-item';
import InputTodo from './input-todo';
import './todo-list.css';

const TodoList = () => {
  const initialTasks = [{ description: 'Item One', status: false, index: 1 },
    { description: 'Item Two', status: false, index: 2 },
    { description: 'Item Three', status: false, index: 3 },
    { description: 'Item Four', status: false, index: 4 }];

  const [tasks, setTasks] = useState(initialTasks);

  const deleteTask = (e) => {
    const taskId = Number(e.target.parentElement.id.split('-')[1]);
    setTasks((prevTasks) => prevTasks.filter((task) => (task.index !== taskId)));
  };

  const addTask = (e) => {
    e.preventDefault();
    const inputElement = e.target.querySelector('input');
    const taskDescription = inputElement.value;
    inputElement.value = '';

    const newTask = { description: taskDescription, status: false };
    setTasks((prevTasks) => {
      const indexes = prevTasks.map((x) => x.index);
      const maxIndex = Math.max(...indexes);
      return [...prevTasks, { ...newTask, index: maxIndex + 1 }];
    });
  };

  // Load from local storage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  // Save to local storage
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  return (
    <>
      <ul id="todo-list">
        <InputTodo addTask={addTask} />
        {tasks.map((task) => (<TodoItem key={task.index} task={task} deleteTask={deleteTask} />))}
      </ul>
    < />
  );
};

export default TodoList;
