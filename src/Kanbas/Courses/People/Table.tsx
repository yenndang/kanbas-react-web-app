import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
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
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Tony Stark
            </td>
            <td>001234561S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-01</td>
            <td>10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Bruce Wayne
            </td>
            <td>001234562S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-02</td>
            <td>15:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Steve Rogers
            </td>
            <td>001234563S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-02</td>
            <td>23:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              Natasha Romanoff
            </td>
            <td>001234564S</td>
            <td>S101</td>
            <td>TA</td>
            <td>2020-11-05</td>
            <td>13:23:34</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
