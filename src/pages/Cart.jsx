import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    checkout,
  } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              width="60"
              height="60"
              style={{ objectFit: "cover" }}
              alt={item.name}
            />

            {/* DETAILS */}
            <div style={{ flex: 1 }}>
              <p>{item.name}</p>
              <p>${item.price}</p>

              {/* QUANTITY CONTROLS */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            {/* REMOVE */}
            <button onClick={() => removeFromCart(item.id)}>
              ❌
            </button>
          </div>
        ))
      )}

      {/* TOTAL */}
      <h3>Total: ${totalPrice}</h3>

      {/* CHECKOUT BUTTON */}
      {cart.length > 0 && (
        <button
          onClick={checkout}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      )}

      <Navbar />
    </div>
  );
}