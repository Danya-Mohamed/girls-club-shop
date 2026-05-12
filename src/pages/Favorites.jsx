import Navbar from "../components/Navbar";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container py-3">

      <h2 className="page-title">My Favorites</h2>

{favorites.length === 0 ? (
  <p className="fav-empty">No favorites yet</p>
) : (
        <div className="row g-3">

          {favorites.map((item) => (
            <div className="col-6" key={item.id}>
              <div className="card p-2">

                <img src={item.image} className="img-fluid" />

                <p className="fw-bold">{item.name}</p>

                <p>${item.price}</p>

              </div>
            </div>
          ))}

        </div>
      )}

      <Navbar />
    </div>
  );
}