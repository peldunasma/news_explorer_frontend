import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = ({
  handleSignUp,
  handleLogin,
  isLoggedIn,
  handleLogout
}) => {
  return (
    <header className="header">
      <Navigation
      handleSignUp={handleSignUp}
      handleLogin={handleLogin}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogout}
       />
    </header>
  );
};

export default Header;