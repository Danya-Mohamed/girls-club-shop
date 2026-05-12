import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TshirtCard from "../components/TshirtCard";
import "../pages/home.css";

// images
// First, make sure these files EXIST in your assets folder
import russtee from "/src/assets/russtee.jpg";  // Try absolute path
import matchatee from "/src/assets/matchtee.jpg";
import hearttee from "/src/assets/heart_tee.jpg";



const Tshirts = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Rus Tee", price: 25, image: russtee },
    { id: 2, name: "Matcha Tee", price: 30, image: matchatee },
    { id: 3, name: "Heart Tee", price: 28, image: hearttee },
  ];

  return (
    <div className="home-container">

      <header className="top-bar">
        <span onClick={() => navigate("/home")}>🏠</span>
        <h1 className="logo">The Girls Club</h1>
        <span>🛒</span>
      </header>

      <h2 className="page-title">T-Shirts Collection</h2>

      <div className="grid">
        {products.map((item) => (
          <TshirtCard key={item.id} item={item} />
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default Tshirts;
