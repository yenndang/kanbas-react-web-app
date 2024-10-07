import React from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { GrDrag } from "react-icons/gr"; // Imported GrDrag for a drag handle appearance

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <GrDrag className="me-2" />
            Week 1 {/* GrDrag icon added */}
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LEARNING OBJECTIVES {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              Introduction to the course {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              Learn what is Web Development {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LESSON 1 {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LESSON 2 {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <GrDrag className="me-2" />
            Week 2 {/* GrDrag icon added */}
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LEARNING OBJECTIVES {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LESSON 1 {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <GrDrag className="me-2" />
              LESSON 2 {/* GrDrag icon added */}
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
