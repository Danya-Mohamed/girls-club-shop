import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

import "./cards.css";

export default function HoodiesCard({ item }) {

  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const isFav = favorites.some((p) => p.id === item.id);

  return (
    <div className="card shadow-sm">

      <img src={item.image} className="card-img-top" />

      <div className="card-body text-center">

        <p className="fw-bold">{item.name}</p>
        <p>${item.price}</p>

        <button
          className={
            isFav
              ? "btn btn-danger btn-sm w-100 mb-2"
              : "btn btn-outline-dark btn-sm w-100 mb-2"
          }
          onClick={() => toggleFavorite(item)}
        >
          {isFav ? "💔 Remove" : "❤️ Favorite"}
        </button>

        <button
          className="btn btn-dark btn-sm w-100"
          onClick={() => addToCart(item)}
        >
          🛒 Add to Cart
        </button>

      </div>
    </div>
  );
}