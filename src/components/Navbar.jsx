import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">

        {/* LOGO */}
        <div
          onClick={() => navigate("/home")}
          style={{ fontWeight: "600", cursor: "pointer" }}
        >
          THE GIRLS CLUB
        </div>

        {/* LINKS */}
        <div style={{ display: "flex", gap: "18px", fontSize: "12px" }}>
          <span onClick={() => navigate("/home")}>HOME</span>
          <span onClick={() => navigate("/hoodies")}>HOODIES</span>
          <span onClick={() => navigate("/tshirts")}>T-SHIRTS</span>
          <span onClick={() => navigate("/jackets")}>JACKETS</span>
          <span onClick={() => navigate("/contact")}>CONTACT</span>
        </div>

        {/* CART */}
        <div
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer", position: "relative", fontSize: "20px" }}
        >
          🛒

          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-10px",
                background: "black",
                color: "white",
                fontSize: "11px",
                borderRadius: "50%",
                padding: "2px 6px",
              }}
            >
              {cart.length}
            </span>
          )}
        </div>

      </div>

      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}