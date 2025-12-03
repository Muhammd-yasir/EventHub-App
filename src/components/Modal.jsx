
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Background overlay
    <div
      onClick={onClose} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={handleContentClick} 
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
