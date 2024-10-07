// import { Link } from "react-router-dom";

// export default function KanbasNavigation() {
//   return (
//     <div id="wd-kanbas-navigation">
//       <ul>
//         <li>
//           <Link to="/Kanbas/Account" id="wd-account-link">
//             Account
//           </Link>
//         </li>
//         <li>
//           <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/Kanbas/Dashboard" id="wd-course-link">
//             Courses
//           </Link>
//         </li>
//         <li>
//           <Link to="/Kanbas/Calendar" id="wd-calendar-link">
//             Calendar
//           </Link>
//         </li>
//         <li>
//           <Link to="/Kanbas/Inbox" id="wd-inbox-link">
//             Inbox
//           </Link>
//         </li>
//         <li>
//           <Link to="/Labs" id="wd-labs-link">
//             Labs
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="50px" />
      </a>

      {/* Account Link */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>

      {/* Dashboard Link */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      {/* Courses Link */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      {/* Calendar Link */}
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      {/* Inbox Link */}
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      {/* Labs Link */}
      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
