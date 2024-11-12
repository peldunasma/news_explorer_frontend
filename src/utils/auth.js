// import { checkResponse } from "./NewsApi";

// const baseUrl = (process.env.NODE_ENV === "production"
//   ? "https://api-newsexplorer.utdnews.com"
//   : "http://localhost:3001");

// export const signUp = ({username, email, password}) => {
//     return fetch(`${baseUrl}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         password,
//       }),
//     }).then(checkResponse);
//   };

//   export const login = ({ email, password }) => {
//     return fetch(`${baseUrl}/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(checkResponse);
//   };

//   export const checkToken = (token) => {
//     return fetch(`${baseUrl}/users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     }).then(checkResponse);
//   };

//   export const editProfile = ({ username }, token) => {
//     return fetch(`${baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ username }),
//     }).then(checkResponse);
//   };

//   const auth = {
//     signUp,
//     login,
//     checkToken,
//     editProfile,
//   };
  
//   export default auth;

 import { checkResponse } from "./NewsApi";

 const baseUrl = (process.env.NODE_ENV === "production"
  ? "https://api-newsexplorer.utdnews.com"
  : "http://localhost:3001");


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
    login
   };

export default auth;