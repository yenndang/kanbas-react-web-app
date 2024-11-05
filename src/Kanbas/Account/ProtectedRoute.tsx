import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { cid } = useParams(); // Get course ID from URL parameters

  // Check if the user is enrolled in the course if `cid` exists
  const isEnrolled = cid
    ? enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser?._id && enrollment.course === cid
      )
    : true; // If no `cid` in params, assume access is granted

  if (!currentUser) {
    // If no user is logged in, redirect to Signin
    return <Navigate to="/Kanbas/Account/Signin" />;
  } else if (currentUser.role === "STUDENT" && cid && !isEnrolled) {
    // If the user is a student but not enrolled in the course, redirect to Dashboard
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children; // Render the children if the user has access
}
