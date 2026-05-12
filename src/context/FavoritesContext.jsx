import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);