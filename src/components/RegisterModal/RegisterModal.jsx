import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const RegisterModal = ({
  handleCloseModal,
  handleSignUp,
  isOpen,
  switchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const inputValues = {
    email: "",
    password: "",
    username: "",
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
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
      setName("");
    }
  }, [isOpen]);

  //Submit Function

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name });
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="register"
      spanText="Sign In"
      popupSwitch={switchToLogin}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="text"
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
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      {isValid ? (
      <button 
      className="modal__submit-button" 
      type="submit"
      >
        Sign Up
      </button>
      ) : (
      <button 
      className="modal__submit-button" 
      type="submit"
      >
        Sign Up
      </button>
      )}
    </ModalWithForm>
  );
};
export default RegisterModal;
