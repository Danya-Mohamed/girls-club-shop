import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={styles.nav}>

      {/* HOME */}
      <span onClick={() => navigate("/home")}>🏠</span>

      {/* JACKETS */}
      <span onClick={() => navigate("/jackets")}>🛍️</span>

    

      {/* FAVORITES */}
      <span onClick={() => navigate("/favorites")}>❤️</span>

      {/* SETTINGS */}
      <span onClick={() => navigate("/settings")}>👤</span>

    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60px",
    background: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid #eee",
    fontSize: "20px",
    cursor: "pointer",
  },
};