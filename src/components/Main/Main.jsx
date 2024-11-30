import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({  
  searching,
  openPopup,
  isLoading,
  showMoreArticles,
  isLoggedIn,
  handleSaveArticle,
  error,
  keyword,
  }) => {
  return (
    <main className="main">
      <NewsCardList 
       error={error}
       isLoggedIn={isLoggedIn}
       searching={searching}
       isLoading={isLoading}
       showMoreArticles={showMoreArticles}
       openPopup={openPopup}
       handleSaveArticle={handleSaveArticle}
       keyword={keyword}
      />
      <About />
    </main>
  );
};

export default Main;