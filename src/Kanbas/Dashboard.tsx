import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll, setEnrollments } from "./Courses/enrollmentReducer"; // Assuming these actions are implemented in your enrollmentReducer
// import * as db from "./Database";
import { AppDispatch } from "./store";
import * as client from "./Courses/Enrollments/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>(); // Specify AppDispatch type
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );

  const [showAllCourses, setShowAllCourses] = useState(false);

  // Fetch enrollments on mount or when currentUser changes
  useEffect(() => {
    const fetchUserEnrollments = async () => {
      if (currentUser) {
        const enrollments = await client.findEnrollmentsForUser(
          currentUser._id
        );
        dispatch(setEnrollments(enrollments));
      }
    };
    fetchUserEnrollments();
  }, [currentUser, dispatch]);

  // Toggle between showing all courses or only enrolled courses
  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  // Get courses the user is enrolled in
  // const userCourses = courses.filter((courseItem) =>
  //   enrollments.some(
  //     (enrollment: any) =>
  //       enrollment.user === currentUser?._id &&
  //       enrollment.course === courseItem._id
  //   )
  // ); My notes: no need for filter anymore 4.4.1
  const userCourses = courses;

  // Function to handle enrollment
  const handleEnroll = async (courseId: string) => {
    if (currentUser) {
      dispatch(enroll(currentUser._id, courseId)); // Call the async thunk
    }
  };

  // Function to handle unenrollment
  const handleUnenroll = async (courseId: string) => {
    if (currentUser) {
      dispatch(unenroll(currentUser._id, courseId)); // Call the async thunk
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser?.role === "STUDENT" && (
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary" onClick={toggleShowAllCourses}>
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({(showAllCourses ? courses : userCourses).length})
      </h2>
      <hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">New Course</h5>
            <div>
              <button
                className="btn btn-warning"
                id="wd-update-course-click"
                onClick={updateCourse}
                disabled={course._id === "0"}
              >
                Update
              </button>
              <button
                className="btn btn-primary ms-2"
                id="wd-add-new-course-click"
                onClick={addNewCourse}
              >
                Add
              </button>
            </div>
          </div>
          <hr />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
        </>
      )}
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses ? courses : userCourses).map((courseItem) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id &&
                enrollment.course === courseItem._id
            );
            return (
              <div
                key={courseItem._id}
                className="col"
                style={{ width: "300px" }}
              >
                <div className="card h-100">
                  <Link
                    to={`/Kanbas/Courses/${courseItem._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={courseItem.image || "/images/reactjs.jpg"}
                      width="100%"
                      height="160"
                      alt="Course Thumbnail"
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="wd-dashboard-course-title card-title"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {courseItem.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-description card-text text-muted"
                      style={{
                        fontSize: "0.9em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        maxHeight: "4.5em",
                      }}
                    >
                      {courseItem.description}
                    </p>
                    <div className="mt-auto d-flex justify-content-between">
                      <Link
                        to={`/Kanbas/Courses/${courseItem._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                      {currentUser?.role === "FACULTY" ? (
                        <div>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(courseItem);
                            }}
                            className="btn btn-warning me-2"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(courseItem._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        currentUser?.role === "STUDENT" &&
                        (isEnrolled ? (
                          <button
                            onClick={() => handleUnenroll(courseItem._id)}
                            className="btn btn-danger"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEnroll(courseItem._id)}
                            className="btn btn-success"
                          >
                            Enroll
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
