import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HoodiesCard from "../components/HoodiesCard";
import { hoodies } from "../data/hoodies";

const Hoodies = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(hoodies);
  }, []);

  return (
    <div className="home-container">

      <header className="top-bar">
        <span onClick={() => navigate("/home")}>🏠</span>
        <h1 className="logo">The Girls Club</h1>
        <span>🛒</span>
      </header>

      <h2 className="page-title">Hoodies Collection</h2>

      <div className="grid">
        {products.map((item) => (
          <HoodiesCard key={item.id} item={item} />
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default Hoodies;