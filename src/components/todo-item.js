import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    task, deleteTask, editTask, updateStatus,
  } = props;

  const makeEditable = (e) => {
    const taskElement = e.target;
    taskElement.contentEditable = true;
    taskElement.classList.add('white-bg');
    taskElement.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        editTask(e);
      }
    });
  };

  return (
    <li className="todo-item" id={`item-${task.index}`}>
      <input className="item-status" type="checkbox" onChange={updateStatus} />
      <span className="item-description" onDoubleClick={makeEditable}>
        {task.description}
      </span>
      <button className="item-delete" type="button" onClick={deleteTask}> Delete </button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default TodoItem;
