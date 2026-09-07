import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // TEMP FIX PRODUCT (NO INDEX FILE NEEDED)
  const product = {
    id,
    name: "Fashion Item",
    price: 50,
    image: "https://via.placeholder.com/300"
  };

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>

      <img src={product.image} width="250" />

      <h1>{product.name}</h1>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        ADD TO CART
      </button>

    </div>
  );
}