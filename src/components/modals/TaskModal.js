import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import classes from "./TaskModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const TaskModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          onSubmit={props.onSubmit}
          onAddTask={props.onAddTask}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default TaskModal;
