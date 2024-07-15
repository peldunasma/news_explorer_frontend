import "./Header.css";
import header_background from "../../images/header_background.png";

const Header = () => {
  return (
    <header className="header">
      <img 
      src={header_background}
      className="header_background-image"
      alt="Background Image"
      />
      <nav className="header__navBar">
        <h2 className="header_navBar-title">News Explorer</h2>
        <div className="header_navBar-buttons">
          <button type="text" className="header_navBar-button-home">
            Home
          </button>
          <button type="text" className="header_navBar-button-login">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;