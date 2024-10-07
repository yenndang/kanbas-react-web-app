import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation(); // Get the current location to highlight the active link

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Account/Signin"
        className={`list-group-item ${
          location.pathname === "/Kanbas/Account/Signin"
            ? "active"
            : "text-danger"
        } border border-0`}
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className={`list-group-item ${
          location.pathname === "/Kanbas/Account/Signup"
            ? "active"
            : "text-danger"
        } border border-0`}
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className={`list-group-item ${
          location.pathname === "/Kanbas/Account/Profile"
            ? "active"
            : "text-danger"
        } border border-0`}
      >
        Profile
      </Link>
    </div>
  );
}
