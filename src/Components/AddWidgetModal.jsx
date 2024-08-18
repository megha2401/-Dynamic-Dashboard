// import React, { useState, useContext } from "react";
// import { DashboardContext } from "./DashboardContext";

// const AddWidgetModal = ({ categoryId, widgets }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedWidget, setSelectedWidget] = useState(null);
//   const { dispatch } = useContext(DashboardContext);

//   const addWidget = () => {
//     if (selectedWidget) {
//       dispatch({
//         type: "ADD_WIDGET",
//         payload: { categoryId, widget: selectedWidget },
//       });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="add-widget">
//       {!isOpen && <button onClick={() => setIsOpen(true)}>+ Add Widget</button>}

//       {isOpen && (
//         <div className="add-widget-modal">
//           <h3>Add a new Widget</h3>
//           <select
//             onChange={(e) =>
//               setSelectedWidget(widgets.find((w) => w.id === e.target.value))
//             }
//           >
//             <option value="">Select Widget</option>
//             {widgets.map((widget) => (
//               <option key={widget.id} value={widget.id}>
//                 {widget.name}
//               </option>
//             ))}
//           </select>
//           <button onClick={addWidget}>Add Widget</button>
//           <button onClick={() => setIsOpen(false)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddWidgetModal;
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
