import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  const active = (path: string) =>
    pathname === `/Kanbas/Account/${path}` ? "active" : "text-danger";

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser ? (
        <>
          <Link
            to="/Kanbas/Account/Signin"
            className={`list-group-item ${active("Signin")} border border-0`}
          >
            Signin
          </Link>
          <Link
            to="/Kanbas/Account/Signup"
            className={`list-group-item ${active("Signup")} border border-0`}
          >
            Signup
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/Kanbas/Account/Profile"
            className={`list-group-item ${active("Profile")} border border-0`}
          >
            Profile
          </Link>
          {currentUser.role === "ADMIN" && (
            <Link
              to="/Kanbas/Account/Users"
              className={`list-group-item ${active("Users")} border border-0`}
            >
              Users
            </Link>
          )}
        </>
      )}
    </div>
  );
}
