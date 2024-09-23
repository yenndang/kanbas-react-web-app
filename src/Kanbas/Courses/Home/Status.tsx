export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>

      <div style={{ marginBottom: "10px" }}>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <button>Import Existing Content</button>
        </li>
        <li>
          <button>Import from Commons</button>
        </li>
        <li>
          <button>Choose Home Page</button>
        </li>
        <li>
          <button>View Course Stream</button>
        </li>
        <li>
          <button>New Announcement</button>
        </li>
        <li>
          <button>New Analytics</button>
        </li>
        <li>
          <button>View Course Notifications</button>
        </li>
      </ul>
    </div>
  );
}
