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
    <div className={`popup ${name} ${isOpen ? " popup_opened" : ""}`}>
      <div className="popup_content">
        <button 
        className="popup_close-button"
        type="button" 
        onClick={onClose}
        />
        <h3 className="popup_title">{title}</h3>
        <form 
        onSubmit={onSubmit} 
        className="popup_form"
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