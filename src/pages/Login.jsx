import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
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
          The Girls Club
        </h2>

        {/* NAME */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* LOGIN BUTTON */}
        <button type="submit" className="btn btn-dark w-100 mb-3">
          Login
        </button>

        {/* SIGN UP SECTION */}
        <div className="text-center">
          <p className="mb-2 text-muted">
            Don't have an account yet?
          </p>

          <button
            type="button"
            className="btn btn-outline-dark w-100"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

      </form>
    </div>
  );
}