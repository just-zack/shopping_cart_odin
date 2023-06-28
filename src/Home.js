import React, { useState } from "react";

import Navbar from "./modules/navigation";
import Hero from "./modules/Hero";
import Second from "./modules/Second";
import ShopSnip from "./modules/Shop_snip";
import Footer from "./modules/footer";
import Contact from "./modules/Contact";
import Modal from "./modules/modal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(false);
  return (
    <div className="home">
      <Navbar
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={color}
        setColor={setColor}
      />
      <Hero />
      <Second />
      <ShopSnip />
      <Contact />
      <Footer />
      {openModal && <Modal setOpenModal={setOpenModal} setColor={setColor} />}
    </div>
  );
}

export default Home;
