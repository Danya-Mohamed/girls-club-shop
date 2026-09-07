import Navbar from "../components/Navbar";
import "./address.css";
import { useMemo, useState } from "react";

export default function Address() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  // 🔔 toast state
  const [toast, setToast] = useState(false);

  // 💰 shipping logic (Egypt zones)
  const shippingFee = useMemo(() => {
    const c = city.toLowerCase();

    if (c.includes("cairo") || c.includes("giza") || c.includes("alex")) {
      return 40;
    }

    if (c) return 60;

    return 80;
  }, [city]);

  return (
    <div className="address-page">

      <Navbar />

      <div className="address-container">

        {/* CARD */}
        <div className="address-card">

          <h1>Delivery Address</h1>
          <p className="subtitle">
            Enter your shipping details for Egypt delivery
          </p>

          {/* INPUTS */}
          <div className="form">

            <input
              className="input"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              className="input"
              placeholder="City (Cairo, Alexandria, Giza...)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              className="input"
              placeholder="Postal Code (optional)"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
            />

          </div>

          {/* SUMMARY */}
          <div className="summary">

            <div className="row">
              <span>Country</span>
              <b>Egypt 🇪🇬</b>
            </div>

            <div className="row">
              <span>Shipping Fee</span>
              <b>{shippingFee} EGP</b>
            </div>

            <div className="row">
              <span>Delivery Time</span>
              <b>2–5 days</b>
            </div>

          </div>

          {/* SAVE BUTTON */}
          <button
            className="btn"
            onClick={() => {
              setToast(true);
              setTimeout(() => setToast(false), 2500);
            }}
          >
            Save Address
          </button>

        </div>

      </div>

      {/* 🔔 TOAST NOTIFICATION */}
      {toast && (
        <div className="toast">
          ✓ Address saved successfully
        </div>
      )}

    </div>
  );
}