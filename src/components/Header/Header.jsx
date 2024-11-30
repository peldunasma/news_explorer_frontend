import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({
  handleSignUp,
  handleLogin,
  isLoggedIn,
  handleLogout, 
  handleSubmit,
  setSearching,
  setIsLoading,
  setArticles,
}) => {
  return (
    <header className="header">
      <Navigation
      handleSignUp={handleSignUp}
      handleLogin={handleLogin}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogout}
       />
       <SearchForm
        handleSubmit={handleSubmit}
        setSearching={setSearching}
        setIsLoading={setIsLoading}
        setArticles={setArticles}
      />
    </header>
  );
};

export default Header;