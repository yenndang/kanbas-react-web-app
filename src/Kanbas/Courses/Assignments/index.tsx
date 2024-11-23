import { useParams, Link, useNavigate } from "react-router-dom";
import { FaPlus, FaSearch, FaCheckCircle } from "react-icons/fa";
import { GrDrag } from "react-icons/gr";
import { BsCaretDownFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} from "./reducer";
import { useState, useEffect } from "react";
import * as client from "./client";

// Helper function to format date to "MMM dd at hh:mm am/pm" format
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAssignments = async () => {
      if (cid) {
        const data = await client.findAssignmentsForCourse(cid);
        dispatch(setAssignments(data));
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseAssignments = assignments;

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      await client.deleteAssignment(assignmentId); // API call
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div
          className="input-group input-group-lg"
          style={{ maxWidth: "300px" }}
        >
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
          />
        </div>

        {currentUser?.role === "FACULTY" && (
          <div>
            <button
              id="wd-add-assignment-group"
              className="btn btn-lg btn-secondary me-2"
            >
              <FaPlus className="me-1" /> Group
            </button>
            <button
              id="wd-add-assignment"
              className="btn btn-lg btn-danger"
              onClick={handleAddAssignment}
            >
              <FaPlus className="me-1" /> Assignment
            </button>
          </div>
        )}
      </div>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        <li className="wd-assignment-group-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <GrDrag className="me-2" />
            <BsCaretDownFill className="ms-2" />
            <span className="fw-bold">ASSIGNMENTS</span>
            <div className="ms-auto d-flex align-items-center">
              <span
                className="me-3 rounded-pill"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid gray",
                  padding: "5px 10px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                40% of Total
              </span>
              {currentUser?.role === "FACULTY" && (
                <>
                  <button className="btn text-decoration-none">
                    <FaPlus />
                  </button>
                  <button className="btn text-decoration-none">
                    <BsThreeDotsVertical />
                  </button>
                </>
              )}
            </div>
          </div>

          <ul className="list-group rounded-0">
            {courseAssignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-assignment-item list-group-item p-3"
              >
                <div className="d-flex align-items-center">
                  <GrDrag className="me-2" />
                  <AiOutlineOrderedList
                    className="me-2"
                    style={{ color: "green" }}
                  />
                  <div className="me-auto">
                    {currentUser?.role === "FACULTY" ? (
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="fw-bold text-dark text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                    ) : (
                      <span className="fw-bold text-dark">
                        {assignment.title}
                      </span>
                    )}
                    {/* <div className="me-auto">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-bold text-dark text-decoration-none"
                    >
                      {assignment.title}
                    </Link> */}
                    <br />
                    <span className="text-danger">Multiple Modules | </span>
                    <strong>Not available until</strong>{" "}
                    {formatDate(assignment.availableFrom)} |<br />
                    <strong>Due</strong> {formatDate(assignment.dueDate)} |{" "}
                    {assignment.points} pts
                  </div>
                  <FaCheckCircle className="text-success me-2" />
                  {currentUser?.role === "FACULTY" && (
                    <button
                      onClick={() => handleDeleteAssignment(assignment._id)}
                      className="btn btn-sm btn-danger ms-2"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

// import { useParams, Link } from "react-router-dom";
// import { FaPlus, FaSearch, FaCheckCircle } from "react-icons/fa";
// import { GrDrag } from "react-icons/gr";
// import { BsCaretDownFill, BsThreeDotsVertical } from "react-icons/bs";
// import { AiOutlineOrderedList } from "react-icons/ai";
// import { useSelector } from "react-redux";

// export default function Assignments() {
//   const { cid } = useParams();

//   // Use Redux selector to retrieve assignments and currentUser
//   const assignments = useSelector(
//     (state: any) => state.assignmentsReducer.assignments
//   );
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   // Filter assignments based on course ID
//   const courseAssignments = assignments.filter(
//     (assignment: any) => assignment.course === cid
//   );

//   return (
//     <div id="wd-assignments" className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div
//           className="input-group input-group-lg"
//           style={{ maxWidth: "300px" }}
//         >
//           <span className="input-group-text">
//             <FaSearch />
//           </span>
//           <input
//             id="wd-search-assignment"
//             className="form-control"
//             placeholder="Search..."
//           />
//         </div>

//         {currentUser?.role === "FACULTY" && (
//           <div>
//             <button
//               id="wd-add-assignment-group"
//               className="btn btn-lg btn-secondary me-2"
//             >
//               <FaPlus className="me-1" /> Group
//             </button>
//             <button id="wd-add-assignment" className="btn btn-lg btn-danger">
//               <FaPlus className="me-1" /> Assignment
//             </button>
//           </div>
//         )}
//       </div>

//       <ul id="wd-assignments-list" className="list-group rounded-0">
//         <li className="wd-assignment-group-item list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
//             <GrDrag className="me-2" />
//             <BsCaretDownFill className="ms-2" />
//             <span className="fw-bold">ASSIGNMENTS</span>
//             <div className="ms-auto d-flex align-items-center">
//               <span
//                 className="me-3 rounded-pill"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "1px solid gray",
//                   padding: "5px 10px",
//                   fontSize: "15px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 40% of Total
//               </span>
//               {currentUser?.role === "FACULTY" && (
//                 <>
//                   <button className="btn text-decoration-none">
//                     <FaPlus />
//                   </button>
//                   <button className="btn text-decoration-none">
//                     <BsThreeDotsVertical />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>

//           <ul className="list-group rounded-0">
//             {courseAssignments.map((assignment: any) => (
//               <li
//                 key={assignment._id}
//                 className="wd-assignment-item list-group-item p-3"
//               >
//                 <div className="d-flex align-items-center">
//                   <GrDrag className="me-2" />
//                   <AiOutlineOrderedList
//                     className="me-2"
//                     style={{ color: "green" }}
//                   />{" "}
//                   <div className="me-auto">
//                     <Link
//                       to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                       className="fw-bold text-dark text-decoration-none"
//                     >
//                       {assignment.title}
//                     </Link>
//                     <br />
//                     <span className="text-danger">Multiple Modules | </span>
//                     <strong>Not available until</strong>{" "}
//                     {assignment.availableFrom} |<br />
//                     <strong>Due</strong> {assignment.dueDate} |{" "}
//                     {assignment.points} pts
//                   </div>
//                   <FaCheckCircle className="text-success me-2" />
//                   {currentUser?.role === "FACULTY" && (
//                     <BsThreeDotsVertical className="text-muted" />
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }
