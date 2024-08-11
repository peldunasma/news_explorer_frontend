import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal,handleSignUp,isOpen, switchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Resets input fields

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUserName("");
    }
  }, [isOpen]);

  //Submit Function

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, username });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter your username"
          value={username}
          onChange={handleEmailChange}
        />
      </label>
      <p className="modal__switch" onClick={switchToLogin}>
        or Log in
      </p>
    </ModalWithForm>
  );
};
export default RegisterModal;