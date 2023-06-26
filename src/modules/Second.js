import img1 from "../img/second_img1.png";
import img2 from "../img/second_img2.png";
import "./styles/second.css";

export default function Second() {
  return (
    <div className="second_container">
      <img className="second--img1" src={img1}></img>
      <img className="second--img2" src={img2}></img>
    </div>
  );
}
