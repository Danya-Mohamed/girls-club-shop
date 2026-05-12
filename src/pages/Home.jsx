import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

import collectionImg from "../assets/collection.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";

import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div className="home-container">

      {/* TOP BAR */}
      <header className="top-bar">

        <span onClick={() => navigate("/settings")}>⚙️</span>

        <h1 className="logo">The Girls Club</h1>

        {/* CART ICON */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          🛒

          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "12px",
                width: "18px",
                height: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cart.length}
            </span>
          )}
        </div>

      </header>

      {/* TITLE */}
      <h2 className="title">New Collection</h2>

      {/* HERO IMAGE */}
      <div className="hero-box">
        <img src={collectionImg} alt="collection" />
      </div>

      {/* GRID */}
      <div className="grid">

        {/* HOODIES */}
        <div className="card" onClick={() => navigate("/jackets")}>
          <img src={img2} alt="Hoodies" />
          <p>Hoodies</p>
        </div>

        {/* T-SHIRTS ✅ FIXED */}
        <div className="card" onClick={() => navigate("/tshirts")}>
          <img src={img3} alt="T-Shirts" />
          <p>T-Shirts</p>
        </div>

        {/* JACKETS */}
        <div className="card" onClick={() => navigate("/jackets")}>
          <img src={img4} alt="Jackets" />
          <p>Jackets</p>
        </div>

      </div>

      <Navbar />
    </div>
  );
}