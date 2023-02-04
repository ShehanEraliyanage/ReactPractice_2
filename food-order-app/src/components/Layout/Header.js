import { Fragment } from "react";

import MealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="mealImage" />
      </div>
    </Fragment>
  );
};
export default Header;
