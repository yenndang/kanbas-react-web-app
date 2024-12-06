import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { users, enrollments } from "../../Database"; // Import users and enrollments
import * as client from "../../Account/client";
import PeopleDetails from "./Details";
import People from "./People";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  console.log("Users passed to PeopleTable:", users); // Debugging line

  return (
    <div className="container mt-4">
      <h3>People</h3>
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
          {users
            .filter((user) => user !== null) // Ignore null users
            .map((user) => (
              <tr key={user._id}>
                <td>{`${user.firstName || "Unknown"} ${
                  user.lastName || "Unknown"
                }`}</td>
                <td>{user.loginId || "N/A"}</td>
                <td>{user.section || "N/A"}</td>
                <td>{user.role || "Unknown"}</td>
                <td>{user.lastActivity || "N/A"}</td>
                <td>{user.totalActivity || "N/A"}</td>
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
