import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import logout_light from "../../images/logout_light.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const NavigationSaved = ({ handleLogout, handleEditPopup }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser)
  return (
    <>
      <nav
        className="nav__content"
        style={{ borderBottom: "0.5px solid", borderColor: "#1a1b22" }}
      >
        <h2 className="nav__title" style={{ color: "#1a1b22" }}>
          NewsExplorer
        </h2>
        <div className="nav__buttons">
          <button type="text" className="nav__button-home">
            <Link to="/" style={{ color: "#1a1b22" }}>
              Home
            </Link>
          </button>
          <button
            type="text"
            className="nav__button-saved"
            style={{ color: "#1a1b22" }}
          >
            Saved Articles
          </button>
          <hr className="nav__outline-black" />
          <Link to="/" style={{ textDecoration: "none", color: "#1a1b22" }}>
            <button
              type="text"
              className="nav__button-logout-saved"
              onClick={handleLogout}
            >
              {currentUser?.name}
              <img src={logout_light} className="nav__button-logout-icon"  alt="Logout Icon"/>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationSaved;