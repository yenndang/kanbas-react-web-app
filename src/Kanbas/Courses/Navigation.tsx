import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation">
      <ul>
        <li>
          <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home">
            Home
          </Link>
        </li>
        <li>
          <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">
            Modules
          </Link>
        </li>
        <li>
          <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza">
            Piazza
          </Link>
        </li>
        <li>
          <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom">
            Zoom
          </Link>
        </li>
        <li>
          <Link
            id="wd-course-quizzes-link"
            to="/Kanbas/Courses/1234/Assignments"
          >
            Assignments
          </Link>
        </li>
        <li>
          <Link
            id="wd-course-assignments-link"
            to="/Kanbas/Courses/1234/Quizzes"
          >
            Quizzes
          </Link>
        </li>
        <li>
          <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades">
            Grades
          </Link>
        </li>
        <li>
          <Link id="wd-course-people-link" to="/Kanbas/People">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
}
