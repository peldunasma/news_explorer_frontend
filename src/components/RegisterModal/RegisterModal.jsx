import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const inputValues = {
  email: "",
  password: "",
  username: "",
};

const RegisterModal = ({
  handleCloseModal,
  handleSignUp,
  isOpen,
  switchToLogin,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values);
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
          required
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          required
          className="modal__input"
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          minLength="1"
          maxLength="30"
          placeholder="username"
          value={values.username}
          required
          onChange={handleChange}
        />
      </label>
      {isValid ? (
      <button 
      className="modal__submit-button button_enabled" 
      type="submit"
      >
        Sign Up
      </button>
      ) : (
      <button 
      className="modal__submit-button button_disabled" 
      type="submit"
      >
        Sign Up
      </button>
      )}
    </ModalWithForm>
  );
};
export default RegisterModal;
