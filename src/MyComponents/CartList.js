import React, { useEffect, useState } from "react";
import "./cartList.css";

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="container">
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div className="main-box">
            <img id="product-image" src={cartItem.url} width={80} />
            <span id="product-name"> {cartItem.name} </span>
            <button
              id="sub-button"
              onClick={() => {
                const CARTS = CART.map((item, index) => {
                  return cartIndex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });

                setCART(CARTS);
              }}
            >
              -
            </button>

            <span id="product-quantity"> {cartItem.quantity} </span>
            <button
              id="add-button"
              onClick={() => {
                const CARTS = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });

                setCART(CARTS);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} /- </span>
          </div>
        );
      })}
      <p id="total">
        {" "}
        Total : <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </div>
  );
};

export default CartList;
