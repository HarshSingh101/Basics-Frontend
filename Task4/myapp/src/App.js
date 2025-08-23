import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="thank-you">
        <button className="logout-btn" onClick={() => window.location.reload()}>
          Logout
        </button>
        {isLogin ? (
          <h1>THANK-YOU</h1>
        ) : (
          <h1 className="success-msg">Registration done successfully..!!</h1>
        )}
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {!isLogin ? <p>It's free and only take a minute</p>:""}
        <form onSubmit={handleSubmit}>
          {!isLogin ? (
            <>
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" required />

              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" required />
            </>
          ):""}

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          {!isLogin && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </>
          )}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          {!isLogin ? (
            <>
              <p className="terms">
                By clicking the Sign Up button, you agree to our{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
            </>
          ):""}
        </form>

        <p className="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account?  Sign Up"
            : "Already have an account?  Login"}
        </p>
      </div>
    </div>
  );
}

export default App;
