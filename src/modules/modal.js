import React from "react";
import CartCard from "./CartCard";

import "./styles/modal.css";
import ModalBG from "./modalBG";

export default function Modal({ setOpenModal, setColor }) {
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
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
