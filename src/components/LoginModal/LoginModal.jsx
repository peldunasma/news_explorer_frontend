import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

const inputValues = ({
  email: "",
  password: "",
})

const LoginModal = ({
  handleCloseModal,
  onSubmit,
  isOpen,
  switchToSignup
}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };


  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          required
          onChange={handleChange}
        />
      </label>
      {isValid ? (
      <button 
      className="modal__submit-button button_enabled" 
      type="submit"
      >
        Sign In
      </button>
      ) : (
      <button 
      className="modal__submit-button button_disabled" 
      type="submit"
      >
        Sign In
      </button>
      )}
    </ModalWithForm>
  );
};
export default LoginModal;