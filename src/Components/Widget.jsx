import React from "react";

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={removeWidget}>Remove</button>
    </div>
  );
};
export default Widget;
