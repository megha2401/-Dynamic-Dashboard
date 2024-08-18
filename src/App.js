import React from "react";
import { DashboardProvider } from "./Components/DashboardContext";
import Dashboard from "./Components/Dashboard";
import "./styles.css";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <DashboardProvider>
      <div className="container">
        <div>
          <NavBar />
        </div>

        <h1>CNAPP Dashboard</h1>

        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
s;
