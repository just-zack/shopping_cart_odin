import "./styles/navigation.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  openModal,
  setOpenModal,
  color,
  setColor,
  cartArray,
  setPage,
}) {
  //navbar color change
  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  //shopping cart open/close modal
  function cartModalChange() {
    if (openModal) {
      setOpenModal(false);
      setColor(false);
    } else {
      setOpenModal(true);
      setColor(true);
    }
  }

  //navigte to Shop
  let navigate = useNavigate();
  const routeChangeShop = () => {
    let path = `/shop`;
    navigate(path);
    setColor(true);
    setOpenModal(false);
    setPage("shop");
  };

  //navigate to home
  const routeChangeHome = () => {
    let path = `/`;
    navigate(path);
    setOpenModal(false);
    setPage("home");
  };

  //sum cart quantity
  const sumCartQuantity = () => {
    if (cartArray.length > 0) {
      let sum = 0;
      for (let i = 0; i < cartArray.length; i++) {
        sum += cartArray[i].quantity;
      }
      return sum;
    } else return 0;
  };

  return (
    <div className={color ? "nav_container nav-bg" : "nav_container"}>
      <button className="nav--logo_text" onClick={routeChangeHome}>
        NPC
      </button>
      <div className="nav--button_container">
        <button className="nav--home_btn nav--btn" onClick={routeChangeHome}>
          HOME
        </button>
        <button className="nav--shop_btn nav--btn" onClick={routeChangeShop}>
          SHOP
        </button>
        <div
          className="nav--cart_container"
          onClick={() => {
            cartModalChange();
          }}
        >
          <svg
            className="nav--shopping_icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <div className="nav--cart_count_container">
            <h2 className="nav--cart_count">{sumCartQuantity()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
