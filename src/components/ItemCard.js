import "./styles/itemCard.css";

import rwb_hat from "../img/apparel_img/1.png";
import green_hat from "../img/apparel_img/2.png";
import ins_hat from "../img/apparel_img/3.png";
import blk_hd from "../img/apparel_img/4.png";
import blk_ls from "../img/apparel_img/5.png";
import red_ss from "../img/apparel_img/6.png";
import white_ss from "../img/apparel_img/7.png";

export default function ItemCard({ cartArray, setCartArray, page }) {
  let shopArray = [];
  if (page === "shop") {
    shopArray = [
      { id: 0, item: "RWB 5-panel", price: "65.00", img: rwb_hat, quantity: 1 },
      {
        id: 1,
        item: "Green 5-panel",
        price: "65.00",
        img: green_hat,
        quantity: 1,
      },
      {
        id: 2,
        item: "Insulated 5-panel",
        price: "65.00",
        img: ins_hat,
        quantity: 1,
      },
      { id: 3, item: "Black Hoodie", price: "75.50", img: blk_hd, quantity: 1 },
      {
        id: 4,
        item: "Black Long Sleeve",
        price: "35.00",
        img: blk_ls,
        quantity: 1,
      },
      {
        id: 5,
        item: "Red Short Sleeve",
        price: "32.00",
        img: red_ss,
        quantity: 1,
      },
      {
        id: 6,
        item: "White Short Sleeve",
        price: "32.00",
        img: white_ss,
        quantity: 1,
      },
    ];
  } else {
    shopArray = [
      { id: 0, item: "RWB 5-panel", price: "65.00", img: rwb_hat, quantity: 1 },
      {
        id: 1,
        item: "Green 5-panel",
        price: "65.00",
        img: green_hat,
        quantity: 1,
      },
      {
        id: 2,
        item: "Insulated 5-panel",
        price: "65.00",
        img: ins_hat,
        quantity: 1,
      },
      { id: 3, item: "Black Hoodie", price: "75.50", img: blk_hd, quantity: 1 },
    ];
  }

  //function to switch between buttons layouts depending on if item is in cart and add onclick for adding to cartArray
  function switchCartButtons(shopObject) {
    //helper function for adding new item to cart
    function addToCart() {
      setCartArray((cartArray) => {
        return [...cartArray, shopObject];
      });
    }

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

    if (cartArray.length === 0) {
      return (
        <button className="add_cart" onClick={addToCart}>
          ADD TO CART
        </button>
      );
    } else {
      let variable;
      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id === shopObject.id) {
          return (
            <div className="quantity_container">
              <button
                className="remove cart_quantity"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <button className="quantity cart_quantity">
                {cartArray[i].quantity}
              </button>
              <button className="add cart_quantity" onClick={increaseQuantity}>
                +
              </button>
            </div>
          );
        } else
          variable = (
            <button className="add_cart" onClick={addToCart}>
              ADD TO CART
            </button>
          );
      }
      return variable;
    }
  }

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
            {switchCartButtons(shopArray)}
          </div>
        </div>
      );
    });
  }
  return createItemCards();
}
