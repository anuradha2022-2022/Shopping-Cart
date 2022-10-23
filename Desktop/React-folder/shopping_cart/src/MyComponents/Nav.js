import React from "react";
import "./nav.css";

const Nav = (props) => {
  return (
    <>
      <div className="title">
        <h3 id=" heading " onClick={() => props.handleShow(false)}>
          {" "}
          ShoppingShop{" "}
        </h3>
        <div id="cart-icon">
          <i
            class="fa fa-shopping-cart"
            onClick={() => props.handleShow(true)}
          ></i>
          <sup> {props.count} </sup>
        </div>
      </div>
    </>
  );
};

export default Nav;
