import React, { useState } from "react";
import Header from "./components/Header";
import LogIn from "./components/LogIn/LogIn";
import TaskModal from "./components/modals/TaskModal";
import TasksList from "./components/TasksList";

const TASKS = [
  {
    id: "t1",
    title: "React",
    description: "Learn all basic concepts of react",
  },
  {
    id: "t2",
    title: "JavaScript",
    description: "Learn all basic concepts of js",
  },
  {
    id: "t3",
    title: "Formula 1",
    description: "The new weekend of the race!",
  },
  {
    id: "t4",
    title: "JavaScript",
    description: "Make a small Counter project of React",
  },
];

function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showTaskPage, setshowTaskPage] = useState(false);
  const [actionTask, setActionTask] = useState(TASKS);

  const showCreateTaskHandler = () => {
    setShowCreateTask(true);
  };

  const hideCreateTaskHandler = () => {
    setShowCreateTask(false);
  };

  const addTaskHandler = (task) => {
    setActionTask((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const removeTaskHandler = (index) => {
    let newList = actionTask;
    newList.splice(index, 1);
    setActionTask((prevList) => {
      return [...prevList];
    });
  };

  const showTaskPageHandler = (value) => {
    setshowTaskPage(value);
  };

  const list = (
    <div>
      <Header onShowCreateTaskHandler={showCreateTaskHandler} />
      {showCreateTask && (
        <TaskModal onClose={hideCreateTaskHandler} onAddTask={addTaskHandler} />
      )}
      <TasksList tasks={actionTask} removeTaskHandler={removeTaskHandler} />
    </div>
  );

  return (
    <React.Fragment>
      {<LogIn showTaskPageHandler={showTaskPageHandler} /> && list}
    </React.Fragment>
  );
}

export default App;
