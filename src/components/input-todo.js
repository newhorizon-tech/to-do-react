import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTask } = props;
  return (
    <form id="input-todo" onSubmit={addTask}>
      <input type="text" placeholder="New Task" />
      <button type="submit"> Add Task </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default InputTodo;
