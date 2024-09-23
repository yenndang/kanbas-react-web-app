export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Search bar */}
      <input id="wd-search-assignment" placeholder="Search for Assignments" />

      {/* Add Group and Add Assignment buttons */}
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      {/* Assignments Section */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      {/* List of Assignments */}
      <ul id="wd-assignment-list">
        {/* Assignment 1 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - ENV + HTML
          </a>
          <br />
          Multiple Modules | <strong>Not available until </strong>May 6 at
          12:00am |
          <br />
          <strong>Due </strong>May 13 at 11:59pm | 100 pts
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/124"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          Multiple Modules | <strong>Not available until </strong>May 13 at
          12:00am |
          <br />
          <strong>Due </strong>May 20 at 11:59pm | 100 pts
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/125"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          Multiple Modules | <strong>Not available until </strong>May 20 at
          12:00am |
          <br />
          <strong>Due </strong>May 27 at 11:59pm | 100 pts
        </li>

        {/* More assignments can be added later */}
      </ul>
    </div>
  );
}
