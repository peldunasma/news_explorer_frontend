export function searchNews(keyword) {
  const apiKey = "ef6c28fddfbf4ccb92e99d57bdc02ebd";
  const today = new Date().toISOString().split("T")[0];
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  const BASE_URL = `https://newsapi.org/v2/everything?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${apiKey}`;


  //check api responses 
  // const checkResponse = (response) => {
  //   if(response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(`Error ${response.status}`)
  // };


  return fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      return response.json();
    })
    .then((data) => data.articles)
    .catch((error) => {
      console.error("Fetch error:", error);
      throw new Error("An error occurred while fetching news articles.");
    });
}


export const checkResponse = (res) => {
   return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
 };

export function getItems() {
  return new Promise((resolve, reject) => resolve([
    {
      id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
      title: "Some news article",
      url: "https://www.etfdailynews.com/2024/10/05/jvl-associates-llc-takes-position-in-tesla-inc-nasdaqtsla/",
      // ...etc, whatever properties it's supposed to have
    },
    
  ])
  )}

export function saveArticle(article) { // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url:  "https://fortune.com/2024/10/31/starbucks-brian-niccol-nondairy-plant-based-milk-surcharge-vegan-tax/", // Use whatever properties the newsAPI gives you, I just made these up
      title: "Starbucks ends ‘vegan tax’ on non-dairy milk as new CEO overhauls menu in face of customer exodus - Fortune",
      imageUrl: "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-1082220690-e1730387449230.jpg?resize=1200,600",
      // whatever other properties from the newsAPI-given article object you saved to the database
   })
  }
)}