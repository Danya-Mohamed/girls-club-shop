import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";
import Jackets from "./pages/Jackets";
import Hoodies from "./pages/Hoodies";
import TShirts from "./pages/TShirts";

import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";

import Address from "./pages/Address";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";

import Orders from "./pages/Orders";

export default function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        {/* AUTH */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN */}
        <Route path="/home" element={<Home />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/tshirts" element={<TShirts />} />

        {/* PRODUCT */}
        <Route path="/product/:id" element={<ProductPage />} />

        {/* USER */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />

        {/* SHOP FLOW */}
        <Route path="/cart" element={<Cart />} />
       
        <Route path="/address" element={<Address />} />

        {/* EXTRA */}
        <Route path="/contact" element={<Contact />} />
<Route path="/orders" element={<Orders />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </AnimatePresence>
  );
}