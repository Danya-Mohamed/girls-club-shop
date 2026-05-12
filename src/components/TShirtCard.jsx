import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import "./cards.css";

export default function TshirtCard({ item }) {

  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const isFav = favorites?.some((p) => p.id === item.id);

  // ❌ NO NAVIGATION (IMPORTANT FIX)
  const handleCardClick = () => {
    // intentionally empty to prevent crashes
  };

  return (
    <div
      className="card shadow-sm"
      onClick={handleCardClick}
      style={{ cursor: "default" }}
    >

      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
      />

      <div className="card-body text-center">

        <p className="fw-bold">{item.name}</p>
        <p>${item.price}</p>

        {/* FAVORITE BUTTON */}
        <button
          className={
            isFav
              ? "btn btn-danger btn-sm w-100 mb-2"
              : "btn btn-outline-dark btn-sm w-100 mb-2"
          }
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(item);
          }}
        >
          {isFav ? "💔 Remove" : "❤️ Favorite"}
        </button>

        {/* ADD TO CART */}
        <button
          className="btn btn-dark btn-sm w-100"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(item);
          }}
        >
          🛒 Add to Cart
        </button>

      </div>
    </div>
  );
}