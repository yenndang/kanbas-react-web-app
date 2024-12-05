import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { users, enrollments } from "../../Database"; // Import users and enrollments
import * as client from "../../Account/client";
import PeopleDetails from "./Details";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  // const { cid } = useParams(); // Extract course ID from URL

  // // Filter users based on their enrollment in the current course
  // const courseUsers = users.filter((user) =>
  //   enrollments.some(
  //     (enrollment) => enrollment.user === user._id && enrollment.course === cid
  //   )
  // );

  return (
    <div id="wd-people-table" className="container mt-4">
      <PeopleDetails />

      <h3>People</h3>
      {/* in {cid} */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kanbas/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center">
                No users enrolled in this course.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
