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
          <i className="bi bi-search sidebarIcon"></i>
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
          <i class="bi bi-house sidebarIcon"><a href="/">Home</a></i>
        </li>
        <li className="menu-item">
          <i class="bi bi-border-all sidebarIcon"><a href="/">News</a></i>
        </li>
        <li className="menu-item">
          <i class="bi bi-broadcast sidebarIcon"><a href="/">Radio</a></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
