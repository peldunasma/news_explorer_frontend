import "./SuccessModal.css";
import PopupForm from "../PopupForm/PopupForm";

const SuccessModal = ({
  isOpen,
  handleCloseModal,
  handleLogin,
}) => {
  return (
    <PopupForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <button className="success-modal__sign-in" onClick={handleLogin}>
        Sign In
      </button>
    </PopupForm>
  );
};

export default SuccessModal;
