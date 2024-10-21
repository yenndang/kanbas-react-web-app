import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import necessary hooks
import * as db from "../../Database"; // Import assignments from the database

// Define the type for an assignment
interface Assignment {
  _id: string;
  title: string;
  course: string;
  availableFrom: string;
  dueDate: string;
  until: string;
  points: number;
  modules: string[];
  description: string;
}

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams(); // Extract course ID and assignment ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation
  const assignments: Assignment[] = db.assignments; // Access the assignments from the database

  const [assignment, setAssignment] = useState<Assignment | null>(null);

  // Fetch the correct assignment based on assignment ID and course ID
  useEffect(() => {
    const foundAssignment = assignments.find(
      (a) => a._id === assignmentId && a.course === cid
    );
    setAssignment(foundAssignment || null);
  }, [cid, assignmentId, assignments]);

  if (!assignment) {
    return <div>Loading...</div>; // Show loading if assignment data hasn't loaded yet
  }

  // Handle Cancel button click
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Handle Save button click (you can add save logic here if needed)
  const handleSave = () => {
    // Perform save logic here (e.g., API call or state update)
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to the Assignments screen
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <h5>Assignment Name</h5>
        <input
          id="wd-name"
          value={assignment.title} // Dynamic assignment title
          className="form-control"
          readOnly
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <textarea
          id="wd-description"
          className="form-control"
          rows={8}
          value={assignment.description} // Dynamic assignment description
          readOnly
        />
      </div>

      {/* Points */}
      <div className="row mb-4 justify-content-end">
        <label
          htmlFor="wd-points"
          className="col-md-4 col-form-label text-md-end"
        >
          Points
        </label>
        <div className="col-md-8">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points} // Dynamic points
            readOnly
          />
        </div>
      </div>

      {/* Assignment Group (Static) */}
      <div className="row mb-4 justify-content-end">
        <label
          htmlFor="wd-group"
          className="col-md-4 col-form-label text-md-end"
        >
          Assignment Group
        </label>
        <div className="col-md-8">
          <select id="wd-group" className="form-control">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>
      </div>

      {/* Display Grade As (Static) */}
      <div className="row mb-4 justify-content-end">
        <label
          htmlFor="wd-display-grade-as"
          className="col-md-4 col-form-label text-md-end"
        >
          Display Grade As
        </label>
        <div className="col-md-8">
          <select id="wd-display-grade-as" className="form-control">
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </select>
        </div>
      </div>

      {/* Submission Type (Static) */}
      <div className="row mb-4 justify-content-end">
        <label
          htmlFor="wd-submission-type"
          className="col-md-4 col-form-label text-md-end"
        >
          Submission Type
        </label>
        <div className="col-md-8">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-control mb-3">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
            <label>
              <strong>Online Entry Options</strong>
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Upload
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Assign To Section (Static) */}
      <div className="row mb-4 justify-content-end">
        <label
          htmlFor="wd-assign-to"
          className="col-md-4 col-form-label text-md-end"
        >
          Assign
        </label>
        <div className="col-md-8">
          <div className="border p-3">
            <label htmlFor="wd-assign-to">
              <strong>Assign to</strong>
            </label>
            <select id="wd-assign-to" className="form-control">
              <option>Everyone</option>
              <option>Individual Students</option>
              <option>Groups</option>
            </select>
            <br />
            <label htmlFor="wd-due-date">
              <strong>Due</strong>
            </label>
            <input
              type="datetime-local"
              id="wd-due-date"
              className="form-control"
              value={new Date(assignment.dueDate)
                .toISOString()
                .substring(0, 16)} // Dynamic due date
              readOnly
            />
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  className="form-control"
                  value={new Date(assignment.availableFrom)
                    .toISOString()
                    .substring(0, 16)} // Dynamic available from date
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  className="form-control"
                  value={new Date(assignment.until)
                    .toISOString()
                    .substring(0, 16)} // Dynamic until date
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
