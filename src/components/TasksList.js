import { useState } from "react";
import Task from "./Task";

import classes from "./Tasks.module.css";

const TasksList = (props) => {
  const taskList = props.tasks.map((task, index) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      onClick={() => props.removeTaskHandler(index)}
    />
  ));
  return (
    <section className={classes.task}>
      <ul className={classes.eachTask}>{taskList}</ul>
    </section>
  );
};

export default TasksList;
