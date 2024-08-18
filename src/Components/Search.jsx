import React, { useState, useContext } from "react";
import { DashboardContext } from "./DashboardContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { state } = useContext(DashboardContext);

  const filteredWidgets = state.categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Widgets"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {showResults && (
        <div className="widgets">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map((widget) => (
              <div key={widget.id}>{widget.name}</div>
            ))
          ) : (
            <div>No widgets found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
