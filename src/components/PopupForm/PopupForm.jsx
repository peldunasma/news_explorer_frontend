import "./PopupForm.css";

const PopupForm = ({
  children,
  title,
  onClose,
  name,
  isOpen, 
  onSubmit,
  popupSwitch,
}) => {
  return (
    <div className={`popup ${name} ${isOpen ? " popup__opened" : ""}`}>
      <div className="popup__content">
        <button 
        className="popup__close-button"
        type="button" 
        onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        <form 
        onSubmit={onSubmit} 
        className="popup__form"
        >
          {children}
            <>
              </>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;