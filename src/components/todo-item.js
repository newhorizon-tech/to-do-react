import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = (props) => {
  const {
    task, deleteTask, editTask, updateStatus,
  } = props;

  const [editMode, setEditMode] = useState({ value: false });

  const startEdit = () => {
    setEditMode({ value: true });
  };

  const endEdit = (e) => {
    if (e.keyCode === 13) {
      setEditMode({ value: false });
    }
  };

  return (
    <li className="todo-item" id={`item-${task.index}`}>
      <input className="item-status" key={task.status} type="checkbox" checked={task.status}
             onChange={e => updateStatus(e,task.index)} />             
      <span  className={`item-description edit-${editMode.value.toString()}`}
        onDoubleClick={(e) => startEdit(e.target.value, task.index)}  />
        {task.description}
      </span>
      <input
        className={`edit-${editMode.value.toString()}`}
        onChange={(e) => editTask(e.target.value, task.index)}
        onKeyDown={(e) => endEdit(e)}
        value={task.description}
      />
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
