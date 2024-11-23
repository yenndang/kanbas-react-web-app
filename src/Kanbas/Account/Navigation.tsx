import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const location = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && (
        <>
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
        </>
      )}
      {currentUser && (
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
      )}
    </div>
  );
}
