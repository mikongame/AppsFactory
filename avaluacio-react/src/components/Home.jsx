import { useEffect, useState } from "react";
import "../styles/ElMundoTodayLayout.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://www.elmundotoday.com/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)))
      .catch((err) => console.error("Error al cargar noticias:", err));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emt-favorites")) || [];
    setFavorites(saved);
  }, []);

  const getImage = (post) =>
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  const addToFavorites = (post) => {
    const image = getImage(post);
    const stored = JSON.parse(localStorage.getItem("emt-favorites")) || [];
    if (stored.find((item) => item.id === post.id)) return;

    const newFavs = [...stored, { id: post.id, title: post.title.rendered, image }];
    localStorage.setItem("emt-favorites", JSON.stringify(newFavs));
    setFavorites(newFavs);
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((f) => f.id !== id);
    localStorage.setItem("emt-favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="home-container page-wrapper">
      <div className="main-section">
        <div className="col-left">
          {posts[0] && (
            <div className="noticia-principal">
              <img
                src={getImage(posts[0])}
                alt={posts[0].title.rendered}
                onClick={() => addToFavorites(posts[0])}
              />
              <h2 dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
              <p>
                <a href={posts[0].link} target="_blank" rel="noreferrer">
                  Leer más
                </a>
              </p>
            </div>
          )}

          <div style={{ display: "flex", gap: "1rem" }}>
            {posts.slice(2, 4).map((post) => (
              <div className="noticia-secundaria" style={{ flex: 1 }} key={post.id}>
                <img
                  src={getImage(post)}
                  alt={post.title.rendered}
                  onClick={() => addToFavorites(post)}
                />
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </div>
            ))}
          </div>

          <section className="secondary-section">
            {posts.slice(6, 20).map((post) => (
              <div className="lista-noticia" key={post.id}>
                <img
                  src={getImage(post)}
                  alt={post.title.rendered}
                  onClick={() => addToFavorites(post)}
                />
                <div className="text-wrapper">
                  <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="col-right">
          {[posts[1], posts[4], posts[5]].map(
            (post) =>
              post && (
                <div className="noticia-secundaria" key={post.id}>
                  <img
                    src={getImage(post)}
                    alt={post.title.rendered}
                    onClick={() => addToFavorites(post)}
                  />
                  <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </div>
              )
          )}
        </div>
      </div>

      <section className="favorites-section">
        <h2>Mis favoritos</h2>
        {favorites.length === 0 ? (
          <p>No hay noticias guardadas.</p>
        ) : (
          <ul className="favorites-list">
            {favorites.map((post) => (
              <li key={post.id} onClick={() => removeFromFavorites(post.id)}>
                <span dangerouslySetInnerHTML={{ __html: post.title }} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Home;
