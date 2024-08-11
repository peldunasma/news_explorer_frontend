import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
          <h2 className="nav__title">NewsExplorer</h2>
          <div className="nav__buttons">
            <button type="text" className="nav__button-home">
              Home
            </button>
            <button
              type="text"
              className="nav__button-login"
            >
              Sign In
            </button>
          </div>
    </nav>
  );
};

export default Navigation;
