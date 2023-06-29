import "./styles/cartCard.css";

export default function CartCard({ cartArray }) {
  function createCartCards() {
    return cartArray.map((cartArray) => {
      return (
        <div className="cart--card" key={cartArray.id}>
          <img
            className="cart--card_img"
            src={cartArray.img}
            alt="shirt with NPC logo"
          ></img>
          <div className="cart--card_info">
            <h2 className="card_title">{cartArray.item}</h2>
            <h4 className="card_price">{cartArray.price}</h4>
            <div className="quantity_container">
              <button className="remove cart_quantity">-</button>
              <button className="quantity cart_quantity">
                {cartArray.quantity}
              </button>
              <button className="add cart_quantity">+</button>
            </div>
          </div>
        </div>
      );
    });
  }

  return createCartCards();
}
