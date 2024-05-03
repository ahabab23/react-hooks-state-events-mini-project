import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
