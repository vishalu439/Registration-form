import React from "react";
import "./SuccessModal.css"

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Form Submitted Successfully!</h2>
        <p>Your registration was successful.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
