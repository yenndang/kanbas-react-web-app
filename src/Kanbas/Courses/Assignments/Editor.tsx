import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <h5>Assignment Name</h5>
        <input id="wd-name" value="A1" className="form-control" />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <textarea
          id="wd-description"
          className="form-control"
          rows={8}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
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
            value={100}
          />
        </div>
      </div>

      {/* Assignment Group */}
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

      {/* Display Grade As */}
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

      {/* Submission Type */}
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

      {/* Assign To Section */}
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
              value="2024-05-13T23:59"
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
                  value="2024-05-06T00:00"
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
                  value="2024-05-28T23:59"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
