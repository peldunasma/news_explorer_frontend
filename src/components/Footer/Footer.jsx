import "./Footer.css";
import github from "../../images/github.svg";
import facebook from "../../images/fb.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-copyright">
          &copy; Supersite, Powered by News API
        </p>
          <ul className="footer__content-list">
          <div className="footer__content_text-container">
                <a
                  href="/"
                  style={{ color: "black" }}
                  >
                <li className="footer__content_list-text">Home</li>
                </a>
                <a
                  href="https://tripleten.com"
                  style={{ color: "black" }}
                  target="_blank" 
                  >
                <li className="footer__content_list-text">TripleTen</li>
                </a>
              </div>
              <div className="footer__content_social-container">
              <a
                  href="https://github.com/peldunasma"
                  target="_blank" 
                >
                <img src={github} alt="github" className="footer__content_list-img" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank" 
                >
                <img src={facebook} alt="facebook" className="footer__content_list-img" />
                </a>
              </div>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;