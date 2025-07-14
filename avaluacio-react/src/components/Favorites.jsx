import { useEffect, useState } from "react";
import "../styles/ElMundoTodayLayout.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emt-favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("emt-favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-section">
      <h2>Noticias Favoritas</h2>
      {favorites.length === 0 ? (
        <p>No hay favoritos guardados.</p>
      ) : (
        <div className="lista-noticias">
          {favorites.map((post) => (
            <div className="lista-noticia" key={post.id}>
              <img
                src={post.image}
                alt={post.title}
                onClick={() => toggleFavorite(post.id)}
                title="Haz clic para eliminar"
              />
              <p dangerouslySetInnerHTML={{ __html: post.title }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
