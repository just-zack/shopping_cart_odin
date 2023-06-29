import React, { useState } from "react";

import Navbar from "./components/navigation";
import Hero from "./components/Hero";
import Second from "./components/Second";
import ShopSnip from "./components/Shop_snip";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Modal from "./components/modal";

function Home({
  openModal,
  setOpenModal,
  color,
  setColor,
  cartArray,
  setCartArray,
  page,
  setPage,
}) {
  return (
    <div className="home">
      <Navbar
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setColor={setColor}
        cartArray={cartArray}
        setPage={setPage}
      />
      <Hero />
      <Second />
      <ShopSnip
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setColor={setColor}
        cartArray={cartArray}
        setCartArray={setCartArray}
        page={page}
        setPage={setPage}
      />
      <Contact />
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

export default Home;
