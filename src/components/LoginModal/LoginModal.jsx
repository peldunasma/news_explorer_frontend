import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  onSubmit,
  isOpen,
  switchToSignup
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Sign In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="login"
      spanText="Sign Up"
      popupSwitch={switchToSignup}
      onSubmit={handleSubmit}

    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
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
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};
export default LoginModal;