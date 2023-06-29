import "./styles/contact.css";

export default function Contact() {
  return (
    <div className="contact_container">
      <h1 className="contact--call_action">WE WANT TO HEAR FROM YOU!</h1>
      <div className="contact--link_container">
        <h1 className="contact--description">
          You can follow us through these channels:
        </h1>
        <ul className="contact--list">
          <li>EMAIL</li>
          <li>FACEBOOK</li>
          <li>INSTAGRAM</li>
          <li>TWITTER</li>
        </ul>
        <button className="contact--mail">JOIN OUR MAILING LIST</button>
      </div>
    </div>
  );
}
