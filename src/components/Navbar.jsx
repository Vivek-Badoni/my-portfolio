// import React from "react";

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
//     <div className="container">
//       <a className="navbar-brand" href="#">Vivek Badoni</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           {["Home", "About", "Projects", "Contact"].map(section => (
//             <li className="nav-item" key={section}>
//               <a className="nav-link" href={`#${section.toLowerCase()}`}>{section}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

// src/components/Navbar.jsx
// import React from "react";

// const Navbar = ({ darkMode, toggleTheme }) => (
//   <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-success"} sticky-top`}>
//     <div className="container">
//       <a className="navbar-brand text-white" href="#">Vivek Badoni</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           {"Home,About,Projects,Contact,Blog".split(",").map(section => (
//             <li className="nav-item" key={section}>
//               <a className="nav-link text-white" href={`#${section.toLowerCase()}`}>{section}</a>
//             </li>
//           ))}
//           <li className="nav-item">
//             <button onClick={toggleTheme} className="btn btn-outline-light ms-3">
//               {darkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;
import React from "react";

const Navbar = ({ darkMode, toggleTheme }) => (
  <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-success"} sticky-top`}>
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
        {/* ✅ Logo on the left */}
        <img
          src="/images/logo.png"
          alt="Logo"
          width="50"
          height="50"
          className="me-2 rounded-circle"
        />
        <span className="text-white fw-bold">Vivek Badoni</span>
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {"Home,About,Projects,Blog,Contact,".split(",").map(section => (
            <li className="nav-item" key={section}>
              <a className="nav-link text-white" href={`#${section.toLowerCase()}`}>{section}</a>
            </li>
          ))}
          <li className="nav-item">
            <button onClick={toggleTheme} className="btn btn-outline-light ms-3">
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

