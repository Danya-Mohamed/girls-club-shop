import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import "./orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div className="orders-page">

      <Navbar />

      <div className="orders-container">

        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order.id}>

              <div className="order-header">
                <span>Order #{order.id}</span>
                <span>{order.date}</span>
              </div>

              <div className="order-items">
                {order.items.map((item, i) => (
                  <div className="order-item" key={i}>
                    <span>{item.name}</span>
                    <span>{item.quantity} × {item.price} EGP</span>
                  </div>
                ))}
              </div>

              <div className="order-total">
                Total: {order.total} EGP
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}