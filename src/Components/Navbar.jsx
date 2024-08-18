// // src/components/NavBar.js
// import React from "react";
// // import { Link } from "react-router-dom";
// // import "./styles.css"; // We'll add styling here
// import Search from "./Search";

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="navbar-logo">
//           {/* <Link to="/"> */}
//           Home
//           {/* </Link> */}
//         </div>
//         <div className="navbar-menu">
//           {/* <Link to="/dashboard"> */}
//           Dashboard
//           {/* </Link> */}
//         </div>
//       </div>
//       <div className="navbar-right">
//         <Search />
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// src/components/NavBar.js
import React from "react";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Home</div>
        <div className="navbar-menu">Dashboard</div>
      </div>
      <div className="navbar-right">
        <Search />
      </div>
    </nav>
  );
};

export default NavBar;
