import { useParams } from "react-router";
import * as db from "../../Database"; // Assuming modules.json is imported correctly
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { GrDrag } from "react-icons/gr"; // Imported GrDrag for a drag handle appearance

export default function Modules() {
  const { cid } = useParams(); // Retrieve the course ID from the URL
  const modules = db.modules; // Access the modules data from the database

  // Filter modules based on the current course ID (cid)
  const courseModules = modules.filter((module: any) => module.course === cid);

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {/* Map over the filtered modules for the current course */}
        {courseModules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <GrDrag className="me-2" />
              {module.name} {/* Render the module name */}
              <ModuleControlButtons />
            </div>

            {/* If the module has lessons, map them */}
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li
                    key={lesson._id}
                    className="wd-lesson list-group-item p-3 ps-1"
                  >
                    <GrDrag className="me-2" />
                    {lesson.name} {/* Render the lesson name */}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { GrDrag } from "react-icons/gr"; // Imported GrDrag for a drag handle appearance

// export default function Modules() {
//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       <br />
//       <br />
//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <GrDrag className="me-2" />
//             Week 1 {/* GrDrag icon added */}
//             <ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LEARNING OBJECTIVES {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               Introduction to the course {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               Learn what is Web Development {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LESSON 1 {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LESSON 2 {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <GrDrag className="me-2" />
//             Week 2 {/* GrDrag icon added */}
//             <ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LEARNING OBJECTIVES {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LESSON 1 {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <GrDrag className="me-2" />
//               LESSON 2 {/* GrDrag icon added */}
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }
