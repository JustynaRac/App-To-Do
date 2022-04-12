import Button from "./UI/Button";
import logo from "../icons/logo.svg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div className={classes.description}>
        <h1>My List To Do </h1>
        <Button onClick={props.onShowCreateTaskHandler}>Create a Task!</Button>
      </div>
    </header>
  );
};

export default Header;
