import React from "react";
import "../styles/MainContent.css";

import NuoveUscite from './NuoveUscite'

/* imagini import */
import bigFoto1 from '../assets/images/1a.png'
import bigFoto2 from '../assets/images/1b.png'

import img1 from '../assets/images/2a.png'
import img2 from '../assets/images/2b.png'
import img3 from '../assets/images/2c.png'
import img4 from '../assets/images/2d.png'
import img5 from '../assets/images/2e.png'


/* molto disordinato :( */

const MainContent = () => {
  const exploreButtons = [
    "Scopri Playlist",
    "Generi Musicali",
    "Artisti Popolari",
    "Podcast Consigliati",
    "Classifiche",
    "Novità del Mese",
    "Colonne Sonore",
    "Eventi Live",
    "Consigliati per Te"
  ];

  return (
    <div className="main-content">
      <div className="main-header">
        <h1>Novità</h1>
        <p>NUOVA STAZIONE RADIO</p>
        <span>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</span>
      </div>

      {/* Banner categorie */}
      <div className="main-banner">
        <div className="banner-item">
          <img
            src={bigFoto1}
            alt="Apple Music Chill"
            className="banner-image"
          />
        </div>

        <div className="banner-item">
          <img
            src={bigFoto2}
            alt="Música Uno"
            className="banner-image"
          />
        </div>
      </div>

      <div className="main-episodes">
        <h2>Nuovi episodi radio <i class="bi bi-chevron-right" style={{fontSize: "15px"}}></i></h2>
        <div className="episodes-grid">
          <div className="episode-card">
            <img
              src={img1}
              className="episode-image"
            />
          </div>
          <div className="episode-card">
            <img
              src={img2}
              className="episode-image"
            />
          </div>
          <div className="episode-card">
            <img
              src={img3}
              className="episode-image"
            />
          </div>
          <div className="episode-card">
            <img
              src={img4}
              className="episode-image"
            />
          </div>
          <div className="episode-card">
            <img
              src={img5}
              className="episode-image"
            />
          </div>
        </div>
      </div>

      <div className="main-episodes">
        <h2>Nuove uscite <i class="bi bi-chevron-right" style={{fontSize: "15px"}}></i></h2>
          <NuoveUscite/>
      </div>

      <div className="explore-section">
        <h2>Altro da esplorare</h2>
        <div className="explore-grid">
          {exploreButtons.map((buttonName, index) => (
            <button key={index} className="explore-button">
              {buttonName}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MainContent;
