import "./NewsCard.css";
import { useState } from "react";

const NewsCard = ({
  isSavedNews,
  article,
  isLoggedIn,
  openPopup,
  handleSaveArticle,
  savedArticle,
  handleUnsaveArticle, 
  keyword,
}) => {

  const [clicked, setClicked] = useState(false);
  const [visible, setVisibile] = useState(false);


  const handleClick = () => {
    setClicked(true);
  };

  const handleHover = () => {
    setVisibile(true);
  };

  const handleHoverOut = () => {
    setVisibile(false);
  };

  const convertDate = (isDate) => {
    const date = new Date(isDate);
    const results = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", results);
  };

  return (
    <>
      {isSavedNews ? (
        <>
          <div className="card">
            <button
            onClick={(e) => {
              console.log("Unsave")
              handleUnsaveArticle({ savedArticle }, keyword);
              e.currentTarget.disabled = true;
              handleClick();
            }}
              className="card__trashcan"
              type="button"
            />
            <div className="card__keyword-container">
              <p className="card__keyword">{savedArticle.keyword}</p>
            </div>
            <article className="card__content">
              {savedArticle.urlToImage && (
                <img
                  className="card__image"
                  src={savedArticle.urlToImage}
                  alt={savedArticle.title}
                />
              )}
              <div className="card__text-container">
                <p className="card__date">{savedArticle.date}</p>
                <h3 className="card__title">
                  <a
                    href={savedArticle.url}
                  >
                    {savedArticle.title}
                  </a>
                </h3>
                <p className="card__text">
                  {savedArticle.description}
                </p>
                <p className="card__author">{savedArticle.author}</p>
              </div>
            </article>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            {isLoggedIn === true ? (
              <button
                onClick={(e) => {
                  handleSaveArticle({ article }, keyword);
                  e.currentTarget.disabled = true;
                  handleClick();
                }}
                type="radio"
                className={`${
                  clicked ? "card__bookmark-active" : "card__bookmark"
                }`}
              />
            ) : (
              <>
                <button
                  disabled
                  className="card__bookmark-disabled"
                  onMouseOver={handleHover}
                />
                <button
                  onClick={openPopup}
                  onMouseOut={handleHoverOut}
                  type="text"
                  className={`card__signin ${
                    visible === true ? "signin_reveal" : ""
                  }`}
                >
                  Sign in to save articles
                </button>
              </>
            )}
            <article className="card__content">
              {article.urlToImage && (
                <img
                  className="card__image"
                  src={article.urlToImage}
                  alt={article.title}
                />
              )}
              <div className="card__text-container">
                <p className="card__date">{convertDate(article.publishedAt)}</p>
                <h3 className="card__title">
                  <a
                    href={article.url}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="card__text">{article.description}</p>
                <p className="card__author">{article.source.name}</p>
              </div>
            </article>
          </div>
        </>
      )}
    </>
  );
};

export default NewsCard;