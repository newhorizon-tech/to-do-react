import { useState, useEffect } from 'react';
import TodoItem from './todo-item';
import InputTodo from './input-todo';
import './todo-list.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

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
      const maxIndex = prevTasks.length === 0 ? 0 : Math.max(...indexes);
      return [...prevTasks, { ...newTask, index: maxIndex + 1 }];
    });
  };

  const editTask = (taskDescription, taskId) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const task = newTasks.find((x) => x.index === taskId);
      task.description = taskDescription;
      return newTasks;
    });
  };

  const updateStatus = (e, taskId) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const task = newTasks.find((x) => x.index === taskId);
      task.status = !task.status;
      return newTasks;
    });
  };

  // Load from local storage
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const fetchApi = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const initialTasks = json.slice(0, 10).map((old) => (
        { description: old.title, index: old.id, status: old.completed }
      ));
      setTasks(initialTasks);
    };
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    } else {
      fetchApi();
    }
  }, []);

  // Save to local storage
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  return (
    <ul id="todo-list">
      <InputTodo addTask={addTask} />
      {tasks.map((task) => (
        <TodoItem
          key={task.index}
          task={task}
          editTask={editTask}
          updateStatus={updateStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
