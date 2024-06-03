import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
// import SignInwithGoogle from "./signInWIthGoogle";

function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/admin";
      toast("User logged in Successfully");
    } catch (error) {
      console.log(error.message);

      toast(error.message);
    }
  };
  if (user) {
    return <Navigate to="/admin"></Navigate>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
            position: "top-right",
          },
          error: {
            style: {
              background: "red",
            },
            position: "top-right",
          },
        }}
      />

      {/* <SignInwithGoogle /> */}
    </form>
  );
}

export default Login;
