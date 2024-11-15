import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logout_light from "../../images/logout_light.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";
import NavigationSaved from "../NavigationSaved/NavigationSaved";

const Navigation = ({
  handleLogin,
  isLoggedIn,
  handleLogout,
  handleEditPopup,
}) => {

  const route = useLocation();
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <nav className="nav" >
        {route.pathname === "/" ? (
          // HOMEPAGE NAV BAR (LIGHT MODE)
          <nav
            className="nav__content"
          >
            <h2 className="nav__title">NewsExplorer</h2>
            {/* Logged In Nav Bar */}
            {isLoggedIn ? (
              <>
                <div className="nav__buttons">
                  <button type="text" className="nav__button-home">
                    Home
                  </button>
                  <hr className="nav__outline" />
                  <button type="text" className="nav__button-saved">
                    <Link
                      to="/saved-news"
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Saved Articles
                    </Link>
                  </button>
                  <button
                    type="text"
                    className="nav__button-logout"
                    onClick={handleLogout}
                  >
                    {currentUser?.name}
                    <img
                      src={logout_light}
                      className="nav__button-logout-icon"
                      alt="Logout Icon"
                    />
                  </button>
                </div>
              </>
            ) : (
              // Logged Out Nav Bar
              <>
                <div className="nav__buttons">
                  <button type="text" className="nav__button-home">
                    Home
                  </button>
                  <hr className="nav__outline" />
                  <button className="nav__button-login" onClick={handleLogin}>
                    Sign In
                  </button>
                </div>
              </>
            )}
          </nav>
        ) : (
          // SAVED NEWS NAV BAR (DARK MODE)
          <NavigationSaved
            handleLogout={handleLogout}
            handleEditPopup={handleEditPopup}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;