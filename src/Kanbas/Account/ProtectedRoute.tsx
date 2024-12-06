import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as userClient from "../Account/client";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams(); // Get course ID from URL parameters

  const [enrollments, setEnrollments] = useState<any[]>([]); // State to store enrollments
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch enrollments dynamically when the component mounts
  useEffect(() => {
    const fetchEnrollments = async () => {
      if (currentUser) {
        try {
          const userEnrollments = await userClient.findCoursesForUser(
            currentUser._id
          );
          setEnrollments(userEnrollments);
        } catch (error) {
          console.error("Failed to fetch enrollments:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      } else {
        setLoading(false); // If no current user, stop loading
      }
    };
    fetchEnrollments();
  }, [currentUser]);

  // Show a loading state while fetching enrollments
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if the user is enrolled in the course if `cid` exists
  const isEnrolled = cid
    ? enrollments.some((enrollment: any) => enrollment._id === cid)
    : true; // If no `cid` in params, assume access is granted

  // console.log("ProtectedRoute -> cid:", cid); // Check the course ID from the URL
  // console.log("ProtectedRoute -> currentUser:", currentUser); // Check the logged-in user
  // console.log("ProtectedRoute -> enrollments:", enrollments); // Check the fetched enrollments
  // console.log("ProtectedRoute -> isEnrolled:", isEnrolled); // Check enrollment logic

  if (!currentUser) {
    // If no user is logged in, redirect to Signin
    return <Navigate to="/Kanbas/Account/Signin" />;
  } else if (currentUser.role === "STUDENT" && cid && !isEnrolled) {
    // If the user is a student but not enrolled in the course, redirect to Dashboard
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children; // Render the children if the user has access
}
