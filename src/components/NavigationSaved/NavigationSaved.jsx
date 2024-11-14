import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavigationSaved = ({ handleLogout, handleEditPopup, isLoggedIn, handleLogin}) => {
  const currentUser = useContext(UserContext);
  return (
        <nav className="nav"
        style={{ borderBottom: "0.5px solid", borderColor: "#1a1b22" }}
        >
          <Link to="/">
            <h2 className="nav__title" style={{ color: "#1a1b22" }}>NewsExplorer</h2>
          </Link>
          <div className="nav__buttons">
            {isLoggedIn ? (
              <>
                  <button 
                  className="nav__button-home" style={{ textDecoration: "none", color: "#1a1b22" }}>
                    Home
                  </button>
                <hr className="nav__outline-black"/>
                <button type="text" className="nav__button-saved"style={{ color: "#1a1b22" }}>
                  <Link
                    to="/saved-news"
                    style={{
                      textDecoration: "none",
                      color: "black",
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

export default NavigationSaved;