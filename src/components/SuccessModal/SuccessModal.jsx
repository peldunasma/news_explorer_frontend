import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const SuccessModal = ({ isOpen, handleCloseModal, handleLogin }) => {
  const [orText, setOrText] = useState(false);
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      handleLogin={handleLogin}
      spanText="Sign In"
      handleCloseModal={handleCloseModal}
      orText={orText}
    ></ModalWithForm>
  );
};

export default SuccessModal;