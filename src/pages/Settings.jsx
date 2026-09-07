import Navbar from "../components/Navbar";
import "./settings.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // SETTINGS STATE
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Load notifications from storage
  useEffect(() => {
    const saved = localStorage.getItem("notifications");
    if (saved !== null) {
      setNotifications(JSON.parse(saved));
    }
  }, []);

  // Save notifications
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Dark mode toggle (GLOBAL)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="settings-container">

      {/* HEADER */}
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account & preferences</p>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">
        <div className="profile-image">👤</div>

        <div className="profile-info">
          <h2>{user?.name || "Guest User"}</h2>
          <p>{user?.email || "No email"}</p>
        </div>
      </div>

      {/* SETTINGS LIST */}
      <div className="settings-list">

        {/* FAVORITES */}
        <div className="setting-item" onClick={() => navigate("/favorites")}>
          <span>❤️ Favorites</span>
          <span>›</span>
        </div>
<div
  className="setting-item"
  onClick={() => navigate("/orders")}
>
  <span>🛍 My Orders</span>
  <span>›</span>
</div>
        {/* NOTIFICATIONS */}
        <div className="setting-item">
          <span>🔔 Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <p
          style={{
            marginLeft: "10px",
            marginTop: "6px",
            fontSize: "13px",
            color: notifications ? "green" : "gray",
          }}
        >
          {notifications ? "Notifications are ON" : "Notifications are OFF"}
        </p>

        {/* DARK MODE */}
        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* ADDRESS (ZARA STYLE NAVIGATION) */}
        <div
          className="setting-item"
          onClick={() => navigate("/address")}
          style={{ cursor: "pointer" }}
        >
          <span>📍 Address</span>
          <span>›</span>
        </div>

      

      </div>

      <Navbar />
    </div>
  );
}