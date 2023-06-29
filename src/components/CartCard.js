import "./styles/cartCard.css";

export default function CartCard({ cartArray, setCartArray }) {
  //function to switch between buttons layouts depending on if item is in cart and add onclick for adding to cartArray

  function cartButtons(shopObject) {
    //helper function for increasing quantities for existing items in cart
    function increaseQuantity() {
      let tempArray = cartArray;
      let tempObj;
      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id === shopObject.id) {
          tempObj = cartArray[i];
          tempObj.quantity += 1;
          tempArray.splice(i, 1, tempObj);

          setCartArray((tempArray) => {
            return [...tempArray];
          });
        }
      }
    }

    //helper function for decreasing quantities for existing items in cart
    function decreaseQuantity() {
      let tempArray = cartArray;
      let tempObj;
      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id === shopObject.id) {
          if (cartArray[i].quantity > 1) {
            tempObj = cartArray[i];
            tempObj.quantity -= 1;
            tempArray.splice(i, 1, tempObj);
            setCartArray((tempArray) => {
              return [...tempArray];
            });
          } else {
            tempArray.splice(i, 1);
            setCartArray((tempArray) => {
              return [...tempArray];
            });
          }
        }
      }
    }

    return (
      <div className="quantity_container">
        <button className="remove cart_quantity" onClick={decreaseQuantity}>
          -
        </button>
        <button className="quantity cart_quantity">
          {shopObject.quantity}
        </button>
        <button className="add cart_quantity" onClick={increaseQuantity}>
          +
        </button>
      </div>
    );
  }

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
            <h4 className="card_price">${cartArray.price}</h4>
            {cartButtons(cartArray)}
            {/* <div className="quantity_container">
              <button
                className="remove cart_quantity"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <button className="quantity cart_quantity">
                {cartArray.quantity}
              </button>
              <button className="add cart_quantity">+</button>
            </div> */}
          </div>
        </div>
      );
    });
  }

  return createCartCards();
}
