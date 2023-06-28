import React, { useState } from "react";

import NavbarStatic from "./modules/navigation_static";
import Footer from "./modules/footer";
import Modal from "./modules/modal";
import ItemCard from "./modules/ItemCard";

export default function Shop({ openModal, setOpenModal, color, setColor }) {
  return (
    <div className="shop_container">
      <NavbarStatic
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setColor={setColor}
      />
      <div className="shop-text_container">
        <h1 className="shop--title">SHOP NPC</h1>
        <h3 className="shop--description">JOIN THE NPC REVOLUTION</h3>
      </div>
      <div className="shop--card_container">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <Footer />
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setColor={setColor}
        />
      )}
    </div>
  );
}
