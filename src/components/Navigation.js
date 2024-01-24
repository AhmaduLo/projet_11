import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="navige">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
