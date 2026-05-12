import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import JacketCard from "../components/JacketCard";
import "../pages/home.css";

const Jackets = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const femaleJackets = data.filter((item) =>
          item.category === "women's clothing" &&
          (
            item.title.toLowerCase().includes("jacket") ||
            item.title.toLowerCase().includes("coat")
          )
        );

        const formatted = femaleJackets.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        }));

        setProducts(formatted);
      });
  }, []);

  return (
    <div className="home-container">

      {/* TOP BAR */}
      <header className="top-bar">
        <span onClick={() => navigate("/home")}>🏠</span>
        <h1 className="logo">The Girls Club</h1>
        <span>🛒</span>
      </header>

      {/* TITLE */}
    <h2 className="page-title">Female Jackets</h2>

      {/* GRID */}
      <div className="grid">

        {products.map((item) => (
          <JacketCard key={item.id} item={item} />
        ))}

      </div>

      <Navbar />
    </div>
  );
};

export default Jackets;