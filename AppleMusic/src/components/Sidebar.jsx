import React from "react";
import "../styles/Sidebar.css";

import logo from '../assets/logos/music.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo"/>
      </div>

      <div className="sidebar-search">
      <div className="input-group">
        <span className="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </div>

      <ul className="sidebar-menu">
        <li className="menu-item">
          <i class="bi bi-house"><a href="/">Home</a></i>
        </li>
        <li className="menu-item">
          <i class="bi bi-border-all"><a href="/">News</a></i>
        </li>
        <li className="menu-item">
          <i class="bi bi-broadcast"><a href="/">Radio</a></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
