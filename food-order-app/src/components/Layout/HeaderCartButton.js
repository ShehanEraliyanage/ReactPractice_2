import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnisHighlighted, setBtnisHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.item.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const { item } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnisHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnisHighlighted(true);

    const timer = setTimeout(() => {
      setBtnisHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
