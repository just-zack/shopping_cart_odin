import testImg from "../img/shop_card_demo_img.png";
import "./styles/itemCard.css";

import rwb_hat from "../img/apparel_img/1.png";
import green_hat from "../img/apparel_img/2.png";
import ins_hat from "../img/apparel_img/3.png";
import blk_hd from "../img/apparel_img/4.png";
import blk_ls from "../img/apparel_img/5.png";
import red_ss from "../img/apparel_img/6.png";
import white_ss from "../img/apparel_img/7.png";

export default function ItemCard() {
  const shopArray = [
    { id: 0, item: "RWB 5-panel", price: "65.00", img: rwb_hat },
    { id: 1, item: "Green 5-panel", price: "65.00", img: green_hat },
    { id: 2, item: "Insulated 5-panel", price: "65.00", img: ins_hat },
    { id: 3, item: "Black Hoodie", price: "75.50", img: blk_hd },
    { id: 4, item: "Black Long Sleeve", price: "35.00", img: blk_ls },
    { id: 5, item: "Red Short Sleeve", price: "32.00", img: red_ss },
    { id: 6, item: "White Short Sleeve", price: "32.00", img: white_ss },
  ];

  function createItemCards() {
    return shopArray.map((shopArray) => {
      return (
        <div className="item_card" key={shopArray.id}>
          <img
            className="item_image"
            src={shopArray.img}
            alt={shopArray.item}
          ></img>
          <div className="item_card_info_container">
            <div className="item_info">
              <h3 className="item_name">{shopArray.item}</h3>
              <p className="item_price">${shopArray.price}</p>
            </div>
            <button className="add_cart">ADD TO CART</button>
          </div>
        </div>
      );
    });
  }
  return createItemCards();
}
