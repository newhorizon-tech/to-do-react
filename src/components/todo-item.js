import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { task, deleteTask } = props;

  return (
    <li className="todo-item" id={`item-${task.index}`}>
      <input className="item-status" type="checkbox" />
      <span className="item-description">
        {task.description}
      </span>
      <button className="item-delete" type="button" onClick={deleteTask}> Delete </button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.objectOf(PropTypes.string, PropTypes.boolean, PropTypes.number).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
