import "./FooterStyles.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Safranbolu Kültür Ve Turizm Vakfı</h1>
          <p>Vakıf İletişim Bilgileri:</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Adres: </h4>
          <a href="https://www.google.com/maps/place/Safranbolu+K%C3%BClt%C3%BCr+Ve+Turizm+Vakf%C4%B1/@41.2436378,32.689187,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac43e44081679:0x607d4afee05c9f56!8m2!3d41.2436378!4d32.689187!16s%2Fg%2F1hc68pz9l?entry=ttu">
            Atatürk Mahallesi Ulucami Meydanı No:4 Safranbolu
          </a>
        </div>
        <div>
          <h4>Tel: </h4>
          <a href="/">(370) 712 10 47</a>
        </div>
        <div>
          <h4>GSM: </h4>
          <a href="/">(505)678 78 99 </a>
        </div>
        <div>
          <h4>E-posta: </h4>
          <a href="/">safkulturvak@gmail.com</a>
        </div>
      </div>
      <h3>
        Copyright © 2024 by Safranbolu Kültür Ve Turizm Vakfı All Rights
        Reserved.
      </h3>
    </div>
  );
};

export default Footer;
