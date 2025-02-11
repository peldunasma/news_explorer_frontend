import "./App.css";

// Components
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
import auth, { login } from "../../utils/auth";
import { searchNews } from "../../utils/NewsApi";
import { saveArticle, unsaveArticle } from "../../utils/article-api";

// Contexts
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { SavedArticleContext } from "../../context/SavedArticleContext";
import { ArticleContext } from "../../context/ArticleContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState(3);
  const [isSavedNews, setIsSavedNews] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [keyword, setKeyword] = useState([]);
  const [error, setError] = useState(null);
  const [serverError, setServerError] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
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

  const showMoreArticles = () => {
    setShownArticles((prev) => prev + 3);
  };

  //Authorization Handlers

  const handleSignUp = ({ email, password, name }) => {
    if (!email || !password) {
      return alert("Please enter an email and password");
    }
    auth
      .signUp({ email, password, name })
      .then(() => {
        handleSignUpModal({ email, password, name });
        handleCloseModal();
        handleSuccessModal();
        setCurrentUser({ email, password, name });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          conflictError: "Email is already in use",
        });
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    auth
      .signUp({ email, password })
      .then((res) => {
        handleLoginModal({ email, password });
        localStorage.setItem("jwt", res.token);
        return auth.checkToken(res.token);
      })
      .then(({ data }) => {
        setCurrentUser(data);
        console.log(data);
        handleCloseModal();
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setServerError({
          ...serverError,
          invalidError: "Invalid credentials",
        });
      });
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

  const handleSaveArticle = ({ article }, keyword) => {
    const token = localStorage.getItem("jwt");
    saveArticle({ article }, token, keyword)
      .then((savedArticles) => {
        setSavedArticles((prevArticles) => [...prevArticles, savedArticles]);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchResults = (query) => {
    searchNews(query)
      .then((data) => {
        setSearching(true);
        setTimeout(() => {
          const filteredArticles = data.filter(
            (article) =>
              article.urlToImage &&
              article.title &&
              !article.title.includes("[Removed]")
          );
          setArticles(filteredArticles);
          setIsLoading(false);
        }, 500);
        setKeyword(query);
      })
      .catch((err) => {
        console.error(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      });
  };

  const handleUnsaveArticle = (article, keyword) => { 
    const token = localStorage.getItem("jwt");
    unsaveArticle(article, token, keyword)
      .then(() => {
        const postUnsave = savedArticles.filter((card) => {
          console.log(article.url)
          console.log(card.url)
          return card.url !== article.url;
        });
        setSavedArticles(postUnsave);
        // handleClosePopup();
      })
      .catch((err) => {
        console.error(err);
      });
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
        <ArticleContext.Provider
          value={{ articles, setArticles, shownArticles, setShownArticles }}
        >
          <SavedArticleContext.Provider
            value={{ savedArticles, setSavedArticles }}
          >
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
                        handleSubmit={handleSearchResults}
                        isLoggedIn={isLoggedIn}
                        handleLogout={handleLogout}
                        openPopup={handleLogin}
                        setArticles={setArticles}
                        setIsLoading={setIsLoading}
                        setSearching={setSearching}
                        hideMobileButtons={activeModal == "login"}
                      />
                      <Main
                        articles={articles}
                        openPopup={handleLogin}
                        isLoggedIn={isLoggedIn}
                        isLoading={isLoading}
                        searching={searching}
                        showMoreArticles={showMoreArticles}
                        handleSaveArticle={handleSaveArticle}
                        error={error}
                        keyword={keyword}
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
                        isSavedNews={true}
                        openPopup={handleSignUpModal}
                        savedArticles={savedArticles}
                        handleLogout={handleLogout}
                        keyword={keyword}
                        handleUnsaveArticle={handleUnsaveArticle}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer isSavedNews={isSavedNews} />
              {activeModal === "login" && (
                <LoginModal
                  handleCloseModal={handleCloseModal}
                  onSubmit={handleLogin}
                  isOpen={activeModal === "login"}
                  switchToSignup={handleSwitch}
                  serverError={serverError}
                  setServerError={setServerError}
                />
              )}
              {activeModal === "signup" && (
                <RegisterModal
                  handleCloseModal={handleCloseModal}
                  handleSignUp={handleSignUp}
                  isOpen={activeModal === "signup"}
                  switchToLogin={handleSwitch}
                  handleSuccessModal={handleSuccessModal}
                  serverError={serverError}
                  setServerError={setServerError}
                />
              )}
              {activeModal === "success" && (
                <SuccessModal
                  handleCloseModal={handleCloseModal}
                  switchToLogin={handleSwitch}
                  isOpen={activeModal === "success"}
                  handleLogin={handleLogin}
                  serverError={serverError}
                  setServerError={setServerError}
                />
              )}
            </div>
          </SavedArticleContext.Provider>
        </ArticleContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
