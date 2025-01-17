import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logout_white from "../../images/logout_white.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";
import NavigationSaved from "../NavigationSaved/NavigationSaved";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Navigation = ({
  handleLogin,
  isLoggedIn,
  handleLogout,
  handleEditPopup,
  isSavedNews,
}) => {

  const route = useLocation();
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <nav className="nav" >
        {route.pathname === "/" ? (
          // NAV BAR (LIGHT MODE)
          <nav
            className="nav__content"
          >
            <h2 className="nav__title">NewsExplorer</h2>
            {/* NAV BAR (LOGGED IN) */}
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
                      src={logout_white}
                      className="nav__button-logout-icon"
                      alt="Logout Icon"
                    />
                  </button>
                </div>
              </>
            ) : (
              // NAV BAR (LOGGED OUT)
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
          // NAV BAR (DARK MODE)
          <NavigationSaved
            handleLogout={handleLogout}
            handleEditPopup={handleEditPopup}
          />
        )}
        <div className="nav__mobile-toggle">
          <NavigationMobile
            openPopup={handleLogin}
            isSavedNews={isSavedNews}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            route={route}
            handleEditPopup={handleEditPopup}
          />
        </div>
      </nav>
    </>
  );
};

export default Navigation;