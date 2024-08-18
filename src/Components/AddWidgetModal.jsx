import React, { useState } from "react";

const AddWidgetModal = ({ isOpen, onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    onAdd({ id: Date.now(), name: widgetName, text: widgetText });
    clearInputFields();
    onClose();
  };

  const handleClose = () => {
    clearInputFields();
    onClose();
  };

  const clearInputFields = () => {
    setWidgetName("");
    setWidgetText("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>Add Widget</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
