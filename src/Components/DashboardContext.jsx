import React, { createContext, useReducer, useEffect } from "react";

export const DashboardContext = createContext();

const initialState = {
  categories: [],
  availableWidgets: [],
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        categories: action.payload.categories,
        availableWidgets: action.payload.availableWidgets,
      };
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("dashboardState"));
    if (savedState) {
      dispatch({ type: "SET_DATA", payload: savedState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboardState", JSON.stringify(state));
  }, [state]);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};
