import {
  FaHome,
  FaHeart,
  FaCog,
  FaFire,
  FaShoppingBag,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="bottom-bar">

      <div
        className="bottom-icon"
        onClick={() => navigate("/home")}
      >
        <FaHome />
        <span>Home</span>
      </div>

      <div
        className="bottom-icon"
        onClick={() => navigate("/favorites")}
      >
        <FaHeart />
        <span>Favorites</span>
      </div>

      <div
        className="bottom-icon"
        onClick={() => navigate("/cart")}
      >
        <FaShoppingBag />
        <span>Cart</span>
      </div>

      
      <div
        className="bottom-icon"
        onClick={() => navigate("/settings")}
      >
        <FaCog />
        <span>Settings</span>
      </div>

    </div>
  );
}