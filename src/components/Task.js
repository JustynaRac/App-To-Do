import { ReactComponent as Bin } from "../icons/bin.svg";

import Card from "./UI/Card";
import classes from "./TasksList.module.css";

const Task = (props) => {
  return (
    <Card className={classes["card-wrapper"]}>
      <li>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.description}>
          <p>{props.description}</p>
        </main>
        <footer className={classes.icons}>
          <Bin
            className={classes.logo}
            alt="bin"
            id={props.id}
            onClick={props.onClick}
          />
        </footer>
      </li>
    </Card>
  );
};

export default Task;
