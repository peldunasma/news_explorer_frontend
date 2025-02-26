import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
import { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import { SavedArticleContext } from "../../context/SavedArticleContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const NewsCardList = ({
    isLoggedIn,
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
  
    const currentUser = useContext(CurrentUserContext);
    const { savedArticles } = useContext(SavedArticleContext);
    const { articles, shownArticles } = useContext(ArticleContext);
  
    return (
      <>
        {/* HOME PAGE NEWS CARD LIST */}
        {route.pathname === "/" ? (
          <>
            {!searching && error ? (
              <p className="cards__search-error">{error}</p>
            ) : null}
            {searching ? (
              <section className="cards">
                {isLoading ? (
                  <>
                    <Preloader />
                  </>
                ) : null}
                {!isLoading && articles.length === 0 ? (
                  <>
                    <NotFound />
                  </>
                ) : <h3 className="cards__text">Search results</h3>}
                {/* Rendering cards when searching */}
                <div className="cards__list-container">
                  <ul className="cards__list">
                    {articles.slice(0, shownArticles).map((article, index) => {
                      console.log(article.url)
                      return (
                        <li className="cards__list-item" key={article.url}>
                          <NewsCard
                            article={article}
                            isLoggedIn={isLoggedIn}
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
                    // Rendering current user saved cards
                    if (savedArticle.owner === currentUser._id) {
                      console.log(savedArticle.url)
                      return (
                        <li className="cards__list-item" key={savedArticle.url}>
                          <NewsCard
                            handleUnsaveArticle={handleUnsaveArticle}
                            article={savedArticle}
                            isSavedNews={isSavedNews}
                            isLoggedIn={isLoggedIn}
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