import React from "react";
import CartCard from "./CartCard";

import "./styles/modal.css";
import ModalBG from "./modalBG";

export default function Modal({
  setOpenModal,
  setColor,
  cartArray,
  setCartArray,
}) {
  function SumCartTotal() {
    if (cartArray.length > 0) {
      let sum = 0;
      for (let i = 0; i < cartArray.length; i++) {
        sum += cartArray[i].quantity * cartArray[i].price;
      }
      return <div className="total">CART TOTAL: ${sum}</div>;
    } else return <div className="total">YOUR CART IS EMPTY</div>;
  }
  return (
    <>
      <ModalBG />
      <div className="cart_bg">
        <div className="cart_container">
          <div className="cart--quit_container">
            <button
              className="cart--quit"
              onClick={() => {
                setOpenModal(false);
                setColor(false);
              }}
            >
              X
            </button>
          </div>
          <div className="cart--title">YOUR SHOPPING CART</div>
          <div className="cart--card_container">
            <CartCard cartArray={cartArray} />
          </div>
          <SumCartTotal />
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
