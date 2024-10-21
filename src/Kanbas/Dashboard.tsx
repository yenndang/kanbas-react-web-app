// import { Link } from "react-router-dom";
// import React from "react";
// import "./Dashboard.css"; // We'll use a separate CSS file for custom styles

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       {/* Dashboard Title */}
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       {/* Published Courses Title */}
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2>
//       <hr />

//       {/* Courses Grid */}
//       <div
//         id="wd-dashboard-courses"
//         className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
//       >
//         {/* Course 1 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/1234/Home"
//             >
//               <img
//                 src="/images/course1.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 1"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">CS1234 React JS</h5>
//                 <p className="card-text">Full Stack Software Developer</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 2 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/5678/Home"
//             >
//               <img
//                 src="/images/course2.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 2"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   ARTF1123 Color and Composition
//                 </h5>
//                 <p className="card-text">Creative Design</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 3 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/9101/Home"
//             >
//               <img
//                 src="/images/course3.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 3"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   CS2500 Fundamentals of Computer Science 1
//                 </h5>
//                 <p className="card-text">Intro to Programming</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 4 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/1122/Home"
//             >
//               <img
//                 src="/images/course4.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 4"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   CS3200 Database Design
//                 </h5>
//                 <p className="card-text">Data Management Systems</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 5 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/3344/Home"
//             >
//               <img
//                 src="/images/course5.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 5"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   ARTG2250 Typography 1
//                 </h5>
//                 <p className="card-text">Graphic Design Basics</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 6 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/5566/Home"
//             >
//               <img
//                 src="/images/course6.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 6"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   CS3700 Networks and Distributed Systems
//                 </h5>
//                 <p className="card-text">Networking Essentials</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Course 7 */}
//         <div className="col">
//           <div className="card h-100">
//             <Link
//               className="wd-dashboard-course-link text-decoration-none text-dark"
//               to="/Kanbas/Courses/7788/Home"
//             >
//               <img
//                 src="/images/course7.jpg"
//                 className="card-img-top fixed-image"
//                 alt="Course 7"
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-truncate">
//                   PHIL1145 Technology and Human Values
//                 </h5>
//                 <p className="card-text">Ethics in Tech</p>
//                 <button className="btn btn-primary w-100">Go</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
