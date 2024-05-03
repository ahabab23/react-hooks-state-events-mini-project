import React from "react";

function Task({ task, index, onDelete }) {
  function handleClickButton() {
    onDelete(index);
  }

  return (
    <div className="task">
      <div className="text">{task.text}</div>
      <div className="label">{task.category}</div>
      <button className="delete" onClick={handleClickButton}>
        X
      </button>
    </div>
  );
}

export default Task;
