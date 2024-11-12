import "./Navigation.css";
import { Link } from "react-router-dom";
import logout_light from "../../images/logout_light.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

const Navigation = ({
  handleLogin,
  isLoggedIn,
  handleLogout,
}) => {

  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="nav">
      <Link to="/">
        <h2 className="nav__title">NewsExplorer</h2>
      </Link>
      <div className="nav__buttons">
        {isLoggedIn ? (
          <>
              <button 
              className="nav__button-home">
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
          </>
        ) : (
          <>
          <div className="nav__buttons">
                  <button type="text" className="nav__button-home">
                    Home
                  </button>
                  <hr className="nav__outline" />
                  <button 
                  className="nav__button-login" 
                  onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </div>
              </>
            )}
          </div>
     </nav>
  );
};

export default Navigation;