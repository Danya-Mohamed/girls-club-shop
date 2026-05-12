import { useFavorites } from "../context/FavoritesContext";

export default function ProductCard({ title, image, onClick }) {

  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some((item) => item.title === title);

  return (
    <div className="card">

      <span
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite({ title, image });
        }}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
          color: isFav ? "red" : "#aaa",
        }}
      >
        {isFav ? "❤️" : "🤍"}
      </span>

      <div className="card-img-wrapper" onClick={onClick}>
        <img src={image} alt={title} />
      </div>

      <p>{title}</p>
    </div>
  );
}