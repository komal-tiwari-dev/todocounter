import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import data from "../data/tasks.json"

const TaskApp = () => {
  const [todolist, settodolist] = React.useState(data);
  const addfun = (item) => {
    settodolist(...todolist,item);
    console.log(todolist)
  };
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask addfun={addfun}/>
      <Tasks todolist={todolist}/>
    </div>
  );
};

export default TaskApp;
