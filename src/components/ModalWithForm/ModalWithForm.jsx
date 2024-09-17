import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  isOpen, 
  onSubmit,
  spanText,
  popupSwitch,
}) => {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? " modal__opened" : ""}`}>
      <div className="modal__content">
        <button 
        className="modal__close-button"
        type="button" 
        onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form 
        onSubmit={onSubmit} 
        className="modal__form"
        >
          {children}
            <p className="modal__or-text">
            <>
              or
            <button
              onClick={popupSwitch}
              type="text"
              className="modal__switch"
            >
              {spanText}
              </button>
              </>
            </p>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;