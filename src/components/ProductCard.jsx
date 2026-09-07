import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <Container>
        <h2>Product not found</h2>
      </Container>
    );
  }

  return (
    <Container>

      <Image src={product.image} />

      <Info>
        <h1>{product.name}</h1>

        <Price>{product.price} EGP</Price>

        <Desc>
          Premium quality fashion item designed for modern street style.
        </Desc>

        <ButtonRow>

          <AddBtn onClick={() => addToCart(product)}>
            Add to Cart
          </AddBtn>

          <BuyBtn onClick={() => navigate("/cart")}>
            Go to Cart
          </BuyBtn>

        </ButtonRow>

      </Info>

    </Container>
  );
}

/* ================= STYLES ================= */

const Container = styled.div`
  display: flex;
  gap: 50px;
  padding: 50px;
  min-height: 100vh;
  background: #f7f7f7;
  font-family: "Poppins", sans-serif;
`;

const Image = styled.img`
  width: 420px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
`;

const Price = styled.p`
  font-size: 22px;
  color: #ff3d71;
  font-weight: 600;
`;

const Desc = styled.p`
  color: #666;
  margin: 20px 0;
  max-width: 400px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
`;

const AddBtn = styled.button`
  padding: 12px 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const BuyBtn = styled.button`
  padding: 12px 20px;
  background: white;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
`;