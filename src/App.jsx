import { Routes, Route, Navigate } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Jackets from "./pages/Jackets";
import Hoodies from "./pages/Hoodies";
import TShirts from "./pages/TShirts";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";  // ✅ ADD THIS IMPORT

export default function App() {
  return (
    <Routes>

      {/* Splash screen first */}
      <Route path="/" element={<Splash />} />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Signup page */}
      <Route path="/signup" element={<Signup />} />

      {/* Main app pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/jackets" element={<Jackets />} />
      <Route path="/hoodies" element={<Hoodies />} />
      <Route path="/tshirts" element={<TShirts />} />
      
     

      <Route path="/favorites" element={<Favorites />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/cart" element={<Cart />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}