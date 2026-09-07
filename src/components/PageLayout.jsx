import Navbar from "./Navbar";
import "../pages/home.css";
import { useState } from "react";

export default function PageLayout({ children }) {
  const [search, setSearch] = useState("");

  return (
    <div className="home-container">
      <Navbar />

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search shirts, hoodies, jackets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PASS SEARCH DOWN PROPERLY */}
      {typeof children === "function" ? children(search) : children}
    </div>
  );
}