import React, { useState } from "react";

import NavbarStatic from "./components/navigation_static";
import Footer from "./components/footer";
import Modal from "./components/modal";
import ItemCard from "./components/ItemCard";

import "./components/styles/shop_pg.css";

export default function Shop({
  openModal,
  setOpenModal,
  color,
  setColor,
  cartArray,
  setCartArray,
}) {
  return (
    <div className="shopPG_container">
      <NavbarStatic
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setColor={setColor}
        cartArray={cartArray}
      />
      <div className="shop--container">
        <div className="shop-text_container">
          <div className="shop--title_container">
            <h1 className="shop--title">SHOP NPC</h1>
          </div>
          <h3 className="shop--description">JOIN THE NPC REVOLUTION</h3>
        </div>
        <div className="shop--card_container">
          <ItemCard cartArray={cartArray} setCartArray={setCartArray} />
        </div>
      </div>
      <Footer />
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setColor={setColor}
          cartArray={cartArray}
          setCartArray={setCartArray}
        />
      )}
    </div>
  );
}
