import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

interface Assignment {
  _id?: string;
  title: string;
  course: string;
  availableFrom: string;
  dueDate: string;
  until: string;
  points: number;
  modules?: string[];
  description: string;
}

// Helper function to format dates for display in "Month Day, Year" format
const formatDisplayDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Helper function to format dates for "datetime-local" input field (YYYY-MM-DDTHH:MM)
const formatDateForInput = (dateString: string | undefined) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().slice(0, 16); // Trims to "YYYY-MM-DDTHH:MM"
};

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const existingAssignment = assignments.find(
    (assignment: Assignment) =>
      assignment._id === assignmentId && assignment.course === cid
  );

  // Default today's date in ISO format for datetime-local input
  const today = new Date().toISOString().slice(0, 16);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: existingAssignment?._id,
    title: existingAssignment?.title || "New Assignment",
    course: cid || "",
    availableFrom: formatDateForInput(
      existingAssignment?.availableFrom || today
    ),
    dueDate: formatDateForInput(existingAssignment?.dueDate || today),
    until: formatDateForInput(existingAssignment?.until || today),
    points: existingAssignment?.points || 0,
    description:
      existingAssignment?.description || "New Assignment's Description",
  });

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleSave = () => {
    const updatedAssignment = {
      ...assignment,
      availableFrom: new Date(assignment.availableFrom).toISOString(),
      dueDate: new Date(assignment.dueDate).toISOString(),
      until: new Date(assignment.until).toISOString(),
    };

    if (existingAssignment) {
      dispatch(updateAssignment(updatedAssignment));
    } else {
      dispatch(addAssignment(updatedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <h5>Assignment Name</h5>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="form-control"
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <textarea
          id="wd-description"
          className="form-control"
          rows={8}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
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
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
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
              value={assignment.dueDate}
              onChange={(e) =>
                setAssignment({ ...assignment, dueDate: e.target.value })
              }
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
                  value={assignment.availableFrom}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFrom: e.target.value,
                    })
                  }
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
                  value={assignment.until}
                  onChange={(e) =>
                    setAssignment({ ...assignment, until: e.target.value })
                  }
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
