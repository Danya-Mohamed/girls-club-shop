import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";

import collectionImg from "../assets/collection.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import BottomBar from "../components/BottomBar";


const HeroButton = styled.button`
  border: none;
  padding: 14px 30px;
  background: white;
  color: black;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: black;
    color: white;
    transform: translateY(-2px);
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout>

      {/* HERO */}
      <section className="hero-section">
        <img src={collectionImg} alt="collection" />

        <div className="hero-overlay">
          <p className="hero-small">NEW COLLECTION 2025</p>
          <h1 className="hero-title">
            Elevate Your <br /> Wardrobe
          </h1>
          <p className="hero-text">
            Discover elegant fashion inspired by luxury modern brands.
          </p>

          <HeroButton onClick={() => navigate("/jackets")}>
            SHOP NOW
          </HeroButton>
        </div>
      </section>

      {/* CATEGORY MENU */}
      <div className="category-menu">
        <button>All</button>
        <button onClick={() => navigate("/hoodies")}>Hoodies</button>
        <button onClick={() => navigate("/tshirts")}>T-Shirts</button>
        <button onClick={() => navigate("/jackets")}>Jackets</button>
      </div>

      {/* GRID */}
      <div className="fashion-grid">
        <div className="fashion-card" onClick={() => navigate("/hoodies")}>
          <img src={img2} alt="hoodies" />
          <div className="fashion-overlay">
            <h3>Hoodies</h3>
            <p>Luxury streetwear essentials</p>
          </div>
        </div>

        <div className="fashion-card" onClick={() => navigate("/tshirts")}>
          <img src={img3} alt="tshirts" />
          <div className="fashion-overlay">
            <h3>T-Shirts</h3>
            <p>Minimal everyday style</p>
          </div>
        </div>

        <div
          className="fashion-card large-card"
          onClick={() => navigate("/jackets")}
        >
          <img src={img4} alt="jackets" />
          <div className="fashion-overlay">
            <h3>Jackets</h3>
            <p>Premium outerwear pieces</p>
          </div>
        </div>
      </div>
<BottomBar />
    </PageLayout>
  );
}