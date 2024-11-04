import "./App.css";

// Components
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";

// Hooks and Routes
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//Utils
import auth from "../../utils/auth";

// Contexts
import { CurrentUserContext } from "../../context/CurrentUserContext";


function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    _id: "",
  });

  //Modal Handlers

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSuccessModal = () => {
    setActiveModal("success");
  };

  const handleEditPopup = () => {
    setActiveModal("edit");
  };

  //Authorization Handlers

  const handleSignUp = ({ email, password, username }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, username })
      .then(() => {
        handleSignUpModal({ email, password, username});
        handleCloseModal();
        handleSuccessModal();
        setCurrentUser({ email, password, username});
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({ email, password }) => {
    auth
      .signUp({ email, password })
      .then((res) => {
        handleLoginModal({ email, password });
        localStorage.setItem("jwt", res.token);
        return auth.checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        handleCloseModal();
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleSwitch = () => {
    activeModal === "login"
      ? setActiveModal("signup")
      : setActiveModal("login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  // useEffect APIs
  
  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header
                    handleSignUp={handleSignUpModal}
                    handleLogin={handleLoginModal}
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                    openPopup={handleLogin}
                  />
                  <Main 
                  openPopup={handleLogin} 
                  isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
              openPopup={handleLogin}
              />
              </ProtectedRoute>
            }
            />
          </Routes>
          <Footer />
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              onSubmit={handleLogin}
              isOpen={activeModal === "login"}
              switchToSignup={handleSwitch}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              handleSignUp={handleSignUp}
              isOpen={activeModal === "signup"}
              switchToLogin={handleSwitch}
              handleSuccessModal={handleSuccessModal}
            />
          )}
          {activeModal === "success" && (
            <SuccessModal
              handleCloseModal={handleCloseModal}
              handleLogin={handleLoginModal}
              isOpen={activeModal === "success"}
            />
          )}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
