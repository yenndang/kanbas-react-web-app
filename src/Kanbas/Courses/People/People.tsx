import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "../client"; // API client
import PeopleTable from "./Table";

export default function People() {
  const { cid } = useParams<{ cid: string }>(); // Ensure TypeScript knows cid is a string
  const [users, setUsers] = useState<any[]>([]); // State to store users
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch users for the course
  const fetchUsers = async () => {
    try {
      if (!cid) {
        throw new Error("Course ID is undefined");
      }
      const fetchedUsers = await client.findUsersForCourse(cid); // cid is validated here
      setUsers(fetchedUsers); // Update state with fetched users
    } catch (error) {
      console.log("cid people", cid);
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on mount
  }, [cid]);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <h2>People Enrolled in Course</h2>
      <PeopleTable users={users} /> {/* Pass users to the table */}
    </div>
  );
}
