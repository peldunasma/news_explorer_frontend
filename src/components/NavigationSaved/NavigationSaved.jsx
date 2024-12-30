import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const NavigationSaved = ({ handleLogout, handleEditPopup }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser)
  return (
    <>
      <nav
        className="nav__content"
        style={{ borderBottom: "0.5px solid", borderColor: "black" }}
      >
        <h2 className="nav__title" style={{ color: "black" }}>
          NewsExplorer
        </h2>
        <div className="nav__buttons">
          <button type="text" className="nav__button-home">
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </button>
          <button
            type="text"
            className="nav__button-saved"
            style={{ color: "black" }}
          >
            Saved Articles
          </button>
          <hr className="nav__outline-black" />
          <Link to="/" style={{ color: "black" }}>
            <button
              type="text"
              className="nav__button-logout-saved"
              onClick={handleLogout}
            >
              {currentUser?.name}
              <img src={logout} className="nav__button-logout-icon"  alt="logout"/>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationSaved;