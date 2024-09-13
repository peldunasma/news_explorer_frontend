import "./App.css";

// Components
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Main from "../Main/Main";

// Hooks and Routes
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
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

  const handleEditPopup = () => {
    setActivePopup("edit");
  };

  //Authorization Handlers

  const handleSignUp = ({ email, password, name, avatar }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, name, avatar })
      .then(() => {
        handleSignUpModal({ email, password, name, avatar });
        handleCloseModal();
        setCurrentUser({ email, password, name, avatar });
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = ({ email, password }) => {
    auth
      .login({ email, password })
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
    setUser(null);
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
          {<Header
            handleSignUp={handleSignUpModal}
            handleLogin={handleLoginModal}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          /> }
          <Routes>
            <Route path="/" element={<Main openPopup={handleLogin} />} />
          </Routes>
          {/* <About /> */}
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
            />
          )}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
