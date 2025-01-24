import React, { useEffect, useState } from "react";
import '../styles/NuoveUscite.css'

const DeezerEpisodes = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=ACDC"
        );
        if (!response.ok) {
          throw new Error("Errore nella chiamata API");
        }
        const data = await response.json();
        const uniqueAlbums = Array.from(
          new Map(data.data.map((track) => [track.album.id, track.album])).values()
        );
        setAlbums(uniqueAlbums.slice(0, 10)); 
        setLoading(false);
      } catch (err) {
        setError("Errore durante il recupero dei dati.");
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="main-episodes">
      <div className="episodes-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <img
              src={album.cover_big} 
              alt={album.title}
              className="album-image"
            />
            <p>{album.title}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeezerEpisodes;
