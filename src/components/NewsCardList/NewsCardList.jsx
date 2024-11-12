import "./NewsCardList.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ArticleContext } from "../../context/ArticleContext";
import { SavedArticleContext } from "../../context/SavedArticleContext";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const NewsCardList = ({
    loggedIn,
    isSavedNews,
    isLoading,
    searching,
    showMoreArticles,
    openPopup,
    handleSaveArticle,
    handleUnsaveArticle,
    handleConfirmPopup,
    error,
    keyword,
  }) => {
    const route = useLocation();
  
    const currentUser = useContext(UserContext);
    const { articles, shownArticles } = useContext(ArticleContext);
    const { savedArticles } = useContext(SavedArticleContext);
  
    return (
      <>
        {/* HOME PAGE NEWS CARD LIST */}
        {route.pathname === "/" ? (
          <>
            {!searching && error ? (
              <p className="cards__search-error">{error}</p>
            ) : null}
            {searching ? (
              // Search and Loader Components
              <section className="cards">
                <h3 className="cards__text">Search Results</h3>
                {isLoading ? (
                  <>
                    <Preloader />
                  </>
                ) : null}
                {!isLoading && articles.length === 0 ? (
                  <>
                    <NotFound />
                  </>
                ) : null}
                {/* Rendering cards through search */}
                <div className="cards__list-container">
                  <ul className="cards__list">
                    {articles.slice(0, shownArticles).map((article, index) => {
                      return (
                        <li className="cards__list-item" key={index}>
                          <NewsCard
                            article={article}
                            loggedIn={loggedIn}
                            openPopup={openPopup}
                            handleSaveArticle={handleSaveArticle}
                            keyword={keyword}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="cards__button-container">
                  {articles.length === 100 ? null : (
                    <button
                      type="text"
                      className="cards__button"
                      onClick={showMoreArticles}
                    >
                      Show More
                    </button>
                  )}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          // Rendering saved articles
          <>
            <section className="cards">
              <div className="cards__list-container">
                <ul className="cards__list">
                  {savedArticles.map((savedArticle) => {
                    // Rendering only cards that the current user saved
                    if (savedArticle.owner === currentUser._id) {
                      return (
                        <li className="cards__list-item" key={savedArticle._id}>
                          <NewsCard
                            handleUnsaveArticle={handleUnsaveArticle}
                            savedArticle={savedArticle}
                            isSavedNews={isSavedNews}
                            loggedIn={loggedIn}
                            handleConfirmPopup={handleConfirmPopup}
                            keyword={keyword}
                          />
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </section>
          </>
        )}
      </>
    );
  };
  
  export default NewsCardList;