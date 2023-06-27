import logo from "../img/NPC_logo_filled.png";
import github from "../img/github.png";
import "../modules/styles/footer.css";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer_container">
      <img className="footer--logo" src={logo}></img>
      <div className="footer">
        <h3 className="footer--text">
          Copyright © {year}{" "}
          <a href="https://github.com/zach-huang" target="_blank">
            zach.huang
          </a>
        </h3>
        <a href="https://github.com/zach-huang" target="blank">
          <img className="footer-githubIcon" src={github}></img>
        </a>
      </div>
    </div>
  );
}
