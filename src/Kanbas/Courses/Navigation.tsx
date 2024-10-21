import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieve course ID from URL
  const { pathname } = useLocation(); // Get the current pathname

  // Array of links for the course navigation
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

// import { Link } from "react-router-dom";
// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link
//         to="/Kanbas/Courses/1234/Home"
//         id="wd-course-home-link"
//         className="list-group-item active border border-0"
//       >
//         {" "}
//         Home{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/Modules"
//         id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         Modules{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/Piazza"
//         id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         Piazza{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/Zoom"
//         id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         Zoom{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/Assignments"
//         id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         Assignments{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/Quizzes"
//         id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         Quizzes{" "}
//       </Link>
//       <Link
//         to="/Kanbas/Courses/1234/People"
//         id="wd-course-people-link"
//         className="list-group-item text-danger border border-0"
//       >
//         {" "}
//         People{" "}
//       </Link>
//     </div>
//   );
// }
