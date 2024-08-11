import "./Footer.css";
import github from "../../images/github.svg";
import facebook from "../../images/fb.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-copyright">
          &copy; Supersite, Powered by News API
        </p>
          <ul className="footer__content-list">
              <div className="footer__content_text-container">
                <p className="footer__content_list-text">Home</p>
                <p className="footer__content_list-text">TripleTen</p>
              </div>
              <div className="footer__content_buttons-container">
                <img src={github} className="footer__content_list-img" />
                <img src={facebook} className="footer__content_list-img" />
              </div>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;