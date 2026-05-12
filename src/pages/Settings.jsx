import Navbar from "../components/Navbar";
import "./settings.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Settings() {
  const { user } = useContext(UserContext);

  return (
    <div className="settings-container">

      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account & preferences</p>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">
        <div className="profile-image">
          <span>👤</span>
        </div>

        <div className="profile-info">
          <h2>{user?.name || "Guest User"}</h2>
          <p>{user?.email || "No email"}</p>
        </div>
      </div>

      {/* SETTINGS LIST */}
      <div className="settings-list">

        <div className="setting-item">
          <span>❤️ Favorites</span>
          <span>›</span>
        </div>

        <div className="setting-item">
          <span>🛍 Orders</span>
          <span>›</span>
        </div>

        <div className="setting-item">
          <span>🔔 Notifications</span>
          <span>›</span>
        </div>

        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <span>›</span>
        </div>

        <div className="setting-item">
          <span>📍 Address</span>
          <span>›</span>
        </div>

        <div className="setting-item logout">
          <span>🚪 Logout</span>
        </div>

      </div>

      <Navbar />
    </div>
  );
}