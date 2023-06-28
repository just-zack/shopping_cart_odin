import React from "react";
import CartCard from "./CartCard";

export default function Modal() {
  return (
    <div className="cart_bg">
      <div className="cart_container">
        <button className="cart--quit">X</button>
        <div className="cart--title">YOUR SHOPPING CART</div>
        <div className="cart--card_container">
          <CartCard />
          <CartCard />
        </div>
        <button className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
}
