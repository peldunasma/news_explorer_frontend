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
    <div className={`modal modal_type_${name} ${isOpen ? " modal_opened" : ""}`}>
      <div className="modal_content">
        <button 
        className="modal_close-button"
        type="button" 
        onClick={onClose}
        />
        <h3 className="modal_title">{title}</h3>
        <form 
        onSubmit={onSubmit} 
        className="modal_form"
        >
          {children}
            <p className="modal_or-text">
            <>
              or
            <button
              onClick={popupSwitch}
              type="text"
              className="modal_switch"
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