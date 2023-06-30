import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [page, setPage] = useState("home");

  return (
    <div className="router">
      <HashRouter>
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
                page={page}
                setPage={setPage}
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
                page={page}
                setPage={setPage}
              />
            }
          />
        </Routes>
        <ScrollToTop />
      </HashRouter>
    </div>
  );
};

export default RouteSwitch;
