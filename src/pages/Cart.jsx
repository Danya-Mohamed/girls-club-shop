import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./cart.css";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState({
    city: "",
    street: "",
    postal: "",
  });

  // Reset step when drawer opens
  useEffect(() => {
    if (openDrawer) {
      setStep(1);
    }
  }, [openDrawer]);

  // TOTAL PRICE
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // TOTAL ITEMS
  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const nextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Validate address before proceeding
      if (!address.city || !address.street || !address.postal) {
        alert("Please fill in all address fields");
        return;
      }
      setStep(3);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const placeOrder = () => {
    // Validate cart isn't empty
    if (cart.length === 0) {
      alert("Your cart is empty!");
      setOpenDrawer(false);
      return;
    }

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: subtotal,
      address,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    alert("Order placed successfully!");

    // Close drawer and reset
    setOpenDrawer(false);
    setStep(1);
    setAddress({ city: "", street: "", postal: "" });

    // Navigate to orders page
    navigate("/orders");
  };

  return (
    <div className="cart-page">

      <Navbar />

      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-left">

          <h2>Your Bag</h2>

          {cart.length === 0 ? (
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "14px",
              }}
            >
              <h3>Your cart is empty</h3>

              <button
                className="checkout-btn"
                onClick={() => navigate("/home")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="item-info">

                  <h4>{item.name}</h4>

                  <p>{item.price} EGP</p>

                  <div className="qty">

                    <button
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>

              </div>
            ))
          )}

        </div>

        {/* RIGHT SIDE - Checkout Button Appears Here */}
        {cart.length > 0 && (
          <div className="cart-summary">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Items ({totalItems})</span>
              <span>{subtotal} EGP</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <b>{subtotal} EGP</b>
            </div>

            <button
              className="continue-btn"
              onClick={() => navigate("/home")}
            >
              Continue Shopping
            </button>

            {/* CHECKOUT BUTTON - Opens the drawer */}
            <button
              className="checkout-btn"
              onClick={() => {
                setOpenDrawer(true);
                setStep(1); // Reset to first step when opening
              }}
            >
              Checkout
            </button>

          </div>
        )}

      </div>

      {/* CHECKOUT DRAWER - Appears when checkout button is clicked */}
      <div className={`drawer ${openDrawer ? "open" : ""}`}>

        {/* Overlay to close drawer when clicking outside */}
        {openDrawer && (
          <div 
            className="drawer-overlay" 
            onClick={() => setOpenDrawer(false)}
          />
        )}

        <div className="drawer-content">

          {/* HEADER */}
          <div className="drawer-header">

            <h3>Checkout - Step {step} of 3</h3>

            <button
              className="close-drawer"
              onClick={() => setOpenDrawer(false)}
            >
              ✕
            </button>

          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="drawer-body">

              <h4>Order Summary</h4>

              <div className="order-items-list">
                {cart.map((item) => (
                  <p key={item.id}>
                    {item.name} × {item.qty} = {item.price * item.qty} EGP
                  </p>
                ))}
              </div>

              <div className="order-total">
                <strong>Total: {subtotal} EGP</strong>
              </div>

              <button 
                className="next-btn"
                onClick={nextStep}
              >
                Next
              </button>

            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="drawer-body">

              <h4>Shipping Address</h4>

              <input
                type="text"
                placeholder="City *"
                value={address.city}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }
                required
              />

              <input
                type="text"
                placeholder="Street *"
                value={address.street}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    street: e.target.value,
                  })
                }
                required
              />

              <input
                type="text"
                placeholder="Postal Code *"
                value={address.postal}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    postal: e.target.value,
                  })
                }
                required
              />

              <div className="button-group">
                <button 
                  className="back-btn"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button 
                  className="next-btn"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>

            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="drawer-body">

              <h4>Confirm Order</h4>

              <div className="confirm-details">
                <h5>Shipping Address:</h5>
                <p>{address.city}</p>
                <p>{address.street}</p>
                <p>{address.postal}</p>

                <h5>Order Total:</h5>
                <p className="total-amount">{subtotal} EGP</p>

                <h5>Items:</h5>
                {cart.map((item) => (
                  <p key={item.id}>
                    {item.name} × {item.qty}
                  </p>
                ))}
              </div>

              <div className="button-group">
                <button 
                  className="back-btn"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button 
                  className="place-order-btn"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}