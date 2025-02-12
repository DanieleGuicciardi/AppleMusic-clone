import React from "react";
import logo from '../assets/logos/apple.svg'
import '../styles/PlayerBar.css'

const Player = () => {
  return (
    <div className="player">
      <div className="controls">
        <i className="bi bi-shuffle player-controls"></i>
        <i className="bi bi-rewind-fill player-controls"></i>
        <i className="bi bi-play-fill player-controls"></i>
        <i className="bi bi-fast-forward-fill player-controls"></i>
        <i className="bi bi-repeat player-controls"></i>
      </div>

      <div className="player-logo">
        <img
          src={logo}
          alt="Apple Logo"
          className="logo-img"
        />
      </div>

      <div className="player-right">
        <input type="range" className="volume-slider" />
        <button className="access-btn">Accedi</button>
      </div>
    </div>
  );
};

export default Player;
