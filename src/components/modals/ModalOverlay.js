import { useRef, useState } from "react";

import { ReactComponent as CloseCross } from "../../icons/close_cross.svg";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TaskModal.module.css";

const ModalOverlay = (props) => {
  const taskInputRef = useRef();
  const descriptionInputRef = useRef();
  const [formErrors, setFormErrors] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTaskRef = taskInputRef.current.value;
    const enteredDescriptRef = descriptionInputRef.current.value;

    if (
      enteredTaskRef.trim().length === 0 ||
      enteredDescriptRef.trim().length === 0
    ) {
      return setFormErrors("Please fill the form!");
    }

    const newTask = {
      id: "t" + Math.random().toString(),
      title: enteredTaskRef,
      description: enteredDescriptRef,
    };

    props.onAddTask(newTask);
    taskInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    props.onClose();
  };

  return (
    <Card className={classes.main}>
      <form className={classes.form} onSubmit={submitHandler}>
        <header>
          <h2>Create task</h2>
          <CloseCross
            className={classes["close-cross"]}
            onClick={props.onClose}
            alt="Close cross"
          />
        </header>
        <main className={classes["form-text"]}>
          <label htmlFor="task">Task Name</label>
          <input id="task" type="text" ref={taskInputRef}></input>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
          <p className={classes.warning}>{formErrors}</p>
        </main>
        <footer className={classes["form-buttons"]}>
          <Button className={classes.cancel} onClick={props.onClose}>
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </footer>
      </form>
    </Card>
  );
};

export default ModalOverlay;
