import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = ({todolist}) => {
  // NOTE: do not delete `data-cy` key value pair
  return todolist.map((item)=>{
      return (
        <li data-cy="task" className={styles.task}>
          <input type="checkbox" data-cy="task-checkbox" className={styles.check}/>
          <p>{item.text}</p>
          <div data-cy="task-text"></div>
          <Counter count1={item.count}/>
          <button data-cy="task-remove-button">X</button>
        </li>
      );
  });
};

export default Task;
