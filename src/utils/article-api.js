export function getArticles() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: "65f7368dfb74bd6a92114c85",
        title: "Walmart employees are now wearing body cameras in some stores - CNBC",
        urlToImage: "https://image.cnbcfm.com/api/v1/image/108064301-1731935488675-gettyimages-2184732367-PWeaver-241117-08.jpeg?v=1734363857&w=1920&h=1080",
        date: "November 11, 2024",
        description: "Walmart store associates are now using body cameras in some locations as retailers look to deter theft and make employees safer.",
        source: "cnn",
        keyword: "some keyword",
        url:  "https://image.cnbcfm.com/api/v1/image/108064301-1731935488675-gettyimages-2184732367-PWeaver-241117-08.jpeg?v=1734363857&w=1920&h=1080",
      },
      {
        id: "65f7371e7bce9e7d331b11a0",
        title: "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
        date: "November 11, 2024",
        description: "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
        source: "cnn",
        keyword: "some keyword",
        url: "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
      },
    ]);
  });
}

export function saveArticle(article, token, keyword) {
  return new Promise((resolve, reject) => {
    resolve({
      id: Math.random().toString(),
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      date: article.date,
      keyword: keyword,
      author: article.source?.name,
      url: article.url,
    });
  });
}

export function unsaveArticle(article, token, keyword) {
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0",
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      date: article.date,
      keyword: keyword,
      author: article.source?.name,
      url: article.url,
    });
  });
}