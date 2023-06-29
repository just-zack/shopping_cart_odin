import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home";
import Shop from "./Shop";

import rwb_hat from "./img/apparel_img/1.png";
import green_hat from "./img/apparel_img/2.png";
import ins_hat from "./img/apparel_img/3.png";
import blk_hd from "./img/apparel_img/4.png";
import blk_ls from "./img/apparel_img/5.png";
import red_ss from "./img/apparel_img/6.png";
import white_ss from "./img/apparel_img/7.png";

const RouteSwitch = () => {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(false);
  const [cartArray, setCartArray] = useState([
    { id: 0, item: "RWB 5-panel", price: "65.00", img: rwb_hat, quantity: 1 },
    {
      id: 1,
      item: "Green 5-panel",
      price: "65.00",
      img: green_hat,
      quantity: 2,
    },
    {
      id: 2,
      item: "Insulated 5-panel",
      price: "65.00",
      img: ins_hat,
      quantity: 1,
    },
  ]);

  return (
    <div className="router">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                openModal={openModal}
                setOpenModal={setOpenModal}
                color={color}
                setColor={setColor}
                cartArray={cartArray}
                setCartArray={setCartArray}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                openModal={openModal}
                setOpenModal={setOpenModal}
                color={color}
                setColor={setColor}
                cartArray={cartArray}
                setCartArray={setCartArray}
              />
            }
          />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
