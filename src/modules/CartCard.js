import cartImg from "../img/shop_card_demo_img.png";
import "./styles/cartCard.css";

export default function CartCard() {
  return (
    <div className="cart--card">
      <img
        className="cart--card_img"
        src={cartImg}
        alt="shirt with NPC logo"
      ></img>
      <div className="cart--card_info">
        <h2 className="card_title">NPC TEE</h2>
        <h4 className="card_price">$22.50</h4>
        <div className="quantity_container">
          <button className="remove cart_quantity">-</button>
          <button className="quantity cart_quantity">2</button>
          <button className="add cart_quantity">+</button>
        </div>
      </div>
    </div>
  );
}
