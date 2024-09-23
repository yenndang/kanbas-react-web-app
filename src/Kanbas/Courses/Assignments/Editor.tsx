export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      {/* Assignment Description */}
      <textarea id="wd-description" rows={8} cols={55}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Links to all relevant source code repositories The Kanbas
        application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <br />

      {/* Points and Assignment Group (inside the table) */}
      <table style={{ width: "100%" }}>
        <tr>
          <td align="right" valign="top" style={{ width: "30%" }}>
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Submission Type   */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Online Entry Options */}
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="wd-text-entry" />{" "}
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />{" "}
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />{" "}
            <label htmlFor="wd-media-recordings">Media Recording</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />{" "}
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />{" "}
            <label htmlFor="wd-file-upload">File Upload</label>
            <br />
          </td>
        </tr>
        <br />
        {/* Assign To Section */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <select id="wd-assign-to">
              <option>Everyone</option>
              <option>Individual Students</option>
              <option>Groups</option>
            </select>
          </td>
        </tr>
        <br />
        {/* Due Date */}
        <tr>
          <td align="right" valign="top"></td>
          <td colSpan={2}>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <br />
        {/* Available From and Until */}
        <tr>
          <td align="right" valign="top"></td>
          <td colSpan={2}>
            {/* Labels */}
            <table>
              <tr>
                <td align="left">
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td align="left">
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              {/* Inputs */}
              <tr>
                <td align="left">
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </td>
                <td align="left">
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-28"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Divider */}
      <hr style={{ margin: "20px 0" }} />

      {/* Save and Cancel Buttons (Right Aligned) */}
      <div style={{ textAlign: "right" }}>
        <button style={{ marginRight: "10px" }}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
