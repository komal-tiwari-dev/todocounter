import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addfun }) => {
  // NOTE: do not delete `data-cy` key value pair
  let [task, setTask] = React.useState("")

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={(e) => {
        setTask(e.target.value)
      }} />
      <button data-cy="add-task-button" onClick={() => {
        console.log(task);
        addfun(task) 
        setTask("")
        }}>+</button>
    </div>
  );
};

export default AddTask;
