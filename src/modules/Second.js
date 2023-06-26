import img1 from "../img/second_img1.png";
import img2 from "../img/second_img2.png";
import "./styles/second.css";

export default function Second() {
  return (
    <div className="second_container">
      <div className="second--img_container">
        <img
          className="second--img1"
          src={img1}
          alt="woman standing in a white NPC branded tshirt"
        ></img>
        <img
          className="second--img2"
          src={img2}
          alt="woman standing in a black NPC branded tshirt"
        ></img>
      </div>
    </div>
  );
}
