import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splashImage from "../assets/splash.jpg";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2",
      }}
    >
      {/* IMAGE ONLY (natural size style) */}
      <img
        src={splashImage}
        alt="splash"
        style={{
          maxWidth: "600px",
          width: "90%",
          height: "auto",
          borderRadius: "12px",
        }}
      />

      {/* Loading */}
      <div
        className="spinner-border"
        style={{ marginTop: "20px" }}
      ></div>

      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        Loading...
      </p>
    </div>
  );
}

export default Splash;