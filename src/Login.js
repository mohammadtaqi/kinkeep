import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter your email and password!");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f4ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        width: "320px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "8px" }}>👨‍👩‍👧 KinKeep</h2>
        <p style={{ textAlign: "center", color: "gray", fontSize: "14px", marginBottom: "24px" }}>
          Stay connected with your family
        </p>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Sign In →
        </button>
      </div>
    </div>
  );
}

export default Login;