import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({todolist}) => {
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        <Task todolist={todolist}/>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
