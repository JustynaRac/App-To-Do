import { useState } from "react";
import Button from "../UI/Button";
import logo from "../../icons/logo.svg";

import classes from "./LogIn.module.css";

const LogIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(event.target.value.trim().length > 6);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 6);
  };

  const formSubmissionHandler = (props) => {
    if (enteredEmail.trim() === "") {
      return alert("Please write a valid e-mail");
    }

    if (enteredPassword.trim() === "") {
      return alert("Please write a valid password");
    } else return props.showTaskPageHandler(formIsValid);
  };

  return (
    <form className={classes.box} onSubmit={formSubmissionHandler}>
      <div>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div className={classes.context}>
        <h1>LOGIN </h1>
        <label htmlFor="login">E-mail</label>
        <input id="login" type="email" onChange={enteredEmailHandler}></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={enteredPasswordHandler}
        ></input>
        <Button>Log in!</Button>
      </div>
    </form>
  );
};

export default LogIn;
