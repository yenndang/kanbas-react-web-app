import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import assignments from the database
import { FaPlus, FaSearch, FaCheckCircle } from "react-icons/fa"; // Icons
import { GrDrag } from "react-icons/gr"; // Drag icon
import { BsCaretDownFill, BsThreeDotsVertical } from "react-icons/bs"; // Caret down and 3-dots menu
import { AiOutlineOrderedList } from "react-icons/ai"; // Outline checkbox icon

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL
  const assignments = db.assignments; // Access assignments from the database

  // Filter assignments for the current course
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="container mt-4">
      {/* Search bar and buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div
          className="input-group input-group-lg"
          style={{ maxWidth: "300px" }}
        >
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
          />
        </div>

        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary me-2"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-lg btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments Section */}
      <ul id="wd-assignments-list" className="list-group rounded-0">
        {/* Assignment Group Header */}
        <li className="wd-assignment-group-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <GrDrag className="me-2" /> {/* Drag Icon */}
            <BsCaretDownFill className="ms-2" /> {/* Caret Down Icon */}
            <span className="fw-bold">ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-center">
              <span
                className="me-3 rounded-pill"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid gray",
                  padding: "5px 10px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {/* You can customize this section */}
                40% of Total
              </span>
              <button className="btn text-decoration-none">
                <FaPlus />
              </button>
              <button className="btn text-decoration-none">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>

          {/* List of Assignments */}
          <ul className="list-group rounded-0">
            {/* Dynamically render assignments */}
            {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-item list-group-item p-3"
              >
                <div className="d-flex align-items-center">
                  <GrDrag className="me-2" /> {/* Drag icon */}
                  <AiOutlineOrderedList
                    className="me-2"
                    style={{ color: "green" }}
                  />{" "}
                  <div className="me-auto">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-bold text-dark text-decoration-none"
                    >
                      {assignment.title} {/* Render assignment title */}
                    </Link>
                    <br />
                    <span className="text-danger">Multiple Modules | </span>
                    <strong>Not available until</strong>{" "}
                    {assignment.availableFrom} |<br />
                    <strong>Due</strong> {assignment.dueDate} |{" "}
                    {assignment.points} pts
                  </div>
                  <FaCheckCircle className="text-success me-2" />{" "}
                  {/* Checkmark icon */}
                  <BsThreeDotsVertical className="text-muted" />{" "}
                  {/* 3-dots menu */}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
