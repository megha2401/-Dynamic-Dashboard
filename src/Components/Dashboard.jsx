import React, { useState } from "react";
import Category from "./Category";
import data from "../data.json";

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, widget],
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="dashboard">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  );
};

export default Dashboard;
