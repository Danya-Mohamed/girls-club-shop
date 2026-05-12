import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Signup() {

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name,
      email,
    });

    navigate("/home");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded shadow"
        style={{ width: "320px" }}
      >

        <h2 className="text-center mb-4 fw-bold">
          Sign Up
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-dark w-100 mb-3">
          Create Account
        </button>

        <button
          type="button"
          className="btn btn-outline-dark w-100"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>

      </form>
    </div>
  );
}