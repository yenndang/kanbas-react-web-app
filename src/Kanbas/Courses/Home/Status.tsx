import { MdDoNotDisturbAlt, MdCheckCircle } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import {
  AiFillBell,
  AiOutlineBarChart,
  AiOutlineHome,
  AiOutlineLineChart,
} from "react-icons/ai";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px", margin: "20px" }}>
      <h2>Course Status</h2>
      <div className="d-flex mb-1">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <MdCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoIosPaper className="me-2 fs-5" /> Import from Commons
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineHome className="me-2 fs-5" /> Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineLineChart className="me-2 fs-5" /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiFillBell className="me-2 fs-5" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineBarChart className="me-2 fs-5" /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiFillBell className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}
