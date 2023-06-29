import "./styles/shop_snip.css";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

export default function ShopSnip({
  openModal,
  setOpenModal,
  color,
  setColor,
  cartArray,
  setCartArray,
  page,
  setPage,
}) {
  //navigte to Shop
  let navigate = useNavigate();
  const routeChangeShop = () => {
    let path = `/shop`;
    navigate(path);
    setColor(true);
    setOpenModal(false);
    setPage("shop");
  };

  return (
    <div className="shopSnip_container">
      <div className="shopSnip--left_container">
        <div className="shopSnip--text_content">
          <h1 className="shopSnip--title">SHOP NPC</h1>
          <h2 className="shopSnip--description">
            Find unique apparel designed by artists from around the world
          </h2>
        </div>
        <button className="shopSnip--shop_button" onClick={routeChangeShop}>
          Show All
        </button>
      </div>
      <div className="shopSnip--card_container">
        <ItemCard
          cartArray={cartArray}
          setCartArray={setCartArray}
          page={page}
        />
      </div>
    </div>
  );
}
