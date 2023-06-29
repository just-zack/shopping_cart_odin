import "./styles/shop_snip.css";
import ItemCard from "./ItemCard";

export default function ShopSnip() {
  return (
    <div className="shopSnip_container">
      <div className="shopSnip--left_container">
        <div className="shopSnip--text_content">
          <h1 className="shopSnip--title">SHOP NPC</h1>
          <h2 className="shopSnip--description">
            Find unique apparel designed by artists from around the world
          </h2>
        </div>
        <button className="shopSnip--shop_button">Show All</button>
      </div>
      <div className="shopSnip--card_container">
        <ItemCard />
      </div>
    </div>
  );
}
