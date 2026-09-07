import { useCart } from "../context/CartContext";


export default function CartDrawer({ open, setOpen }) {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  return (
    <div className={`cart-drawer ${open ? "open" : ""}`}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Your Cart</h3>
        <button onClick={() => setOpen(false)}>X</button>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">

            <img src={item.image} width="60" />

            <div style={{ flex: 1 }}>
              <p>{item.name}</p>
              <p>${item.price}</p>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              remove
            </button>

          </div>
        ))
      )}

    </div>
  );
}