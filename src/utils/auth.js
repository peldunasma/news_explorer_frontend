// import { checkResponse } from "./NewsApi";

//  const baseUrl = process.env.NODE_ENV === "production"
//   ? "https://api-newsexplorer.utdnews.com"
//   : "http://localhost:3001";


export const signUp = (email, password, name) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const login = (email, password, name) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", id: "fake-id" },
    });
  });
};

   const auth = {
    signUp,
    checkToken,
    login,
   };

export default auth;