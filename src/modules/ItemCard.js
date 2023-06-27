import testImg from "../img/shop_card_demo_img.png";
import "./styles/itemCard.css";

export default function ItemCard() {
  return (
    <div className="item_card">
      <img className="item_img" src={testImg} alt="shirt with NPC logo"></img>
      <div className="item_card_info_container">
        <div className="item_info">
          <h3 className="item_name">NPC Tee</h3>
          <p className="item_price">$22.50</p>
        </div>
        <button className="add_cart">ADD TO CART</button>
      </div>
    </div>
  );
}
