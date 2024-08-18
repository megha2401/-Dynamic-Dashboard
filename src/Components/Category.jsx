import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category, addWidget, removeWidget }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-list">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <div className="button">
          <button onClick={() => setIsModalOpen(true)}>+ Add Widget</button>
        </div>
      </div>
      {/* <button onClick={() => setIsModalOpen(true)}>+ Add Widget</button> */}
      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(widget) => addWidget(category.id, widget)}
      />
    </div>
  );
};

export default Category;
