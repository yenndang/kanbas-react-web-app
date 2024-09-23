import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/course1.jpg" width={200} alt="Course 1" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5678/Home"
          >
            <img src="/images/course2.jpg" width={200} alt="Course 2" />
            <div>
              <h5>ARTF1123 Color and Composition</h5>
              <p className="wd-dashboard-course-title">Creative Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/9101/Home"
          >
            <img src="/images/course3.jpg" width={200} alt="Course 3" />
            <div>
              <h5>CS2500 Fundamentals of Computer Science 1</h5>
              <p className="wd-dashboard-course-title">Intro to Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1122/Home"
          >
            <img src="/images/course4.jpg" width={200} alt="Course 4" />
            <div>
              <h5>CS3200 Database Design</h5>
              <p className="wd-dashboard-course-title">
                Data Management Systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3344/Home"
          >
            <img src="/images/course5.jpg" width={200} alt="Course 5" />
            <div>
              <h5>ARTG2250 Typography 1</h5>
              <p className="wd-dashboard-course-title">Graphic Design Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5566/Home"
          >
            <img src="/images/course6.jpg" width={200} alt="Course 6" />
            <div>
              <h5>CS3700 Networks and Distributed Systems</h5>
              <p className="wd-dashboard-course-title">Networking Essentials</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/7788/Home"
          >
            <img src="/images/course7.jpg" width={200} alt="Course 7" />
            <div>
              <h5>PHIL1145 Technology and Human Values</h5>
              <p className="wd-dashboard-course-title">Ethics in Tech</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
