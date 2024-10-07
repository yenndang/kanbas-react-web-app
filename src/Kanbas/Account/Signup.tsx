import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h3>Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-verify-password"
        placeholder="verify password"
        type="password"
        className="form-control mb-4"
      />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="/Kanbas/Account/Signin" className="text-primary">
        Sign in
      </Link>
    </div>
  );
}
