import React from "react";
import logo from '../assets/logos/apple.svg'

const Player = () => {
  return (
    <div className="player">
      <div className="player-controls">
        <i class="bi bi-shuffle"></i>
        <i class="bi bi-rewind-fill"></i>
        <i class="bi bi-play-fill"></i>
        <i class="bi bi-fast-forward-fill"></i>
        <i class="bi bi-repeat"></i>
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
