import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(false);

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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
