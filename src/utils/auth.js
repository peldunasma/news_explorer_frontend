import { checkResponse } from "./NewsApi";

const baseUrl = (process.env.NODE_ENV === "production"
  ? "https://api-newsexplorer.utdnews.com"
  : "http://localhost:3001");

export const signUp = ({username, email, password}) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then(checkResponse);
  };

  export const login = ({ email, password }) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  };

  export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  };

  export const editProfile = ({ username }, token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    }).then(checkResponse);
  };

  const auth = {
    signUp,
    login,
    checkToken,
    editProfile,
  };
  
  export default auth;