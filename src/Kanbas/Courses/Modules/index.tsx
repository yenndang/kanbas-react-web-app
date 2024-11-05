import { useParams } from "react-router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { GrDrag } from "react-icons/gr";
import ModuleEditor from "./ModuleEditor";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [moduleName, setModuleName] = useState("");

  // Add module handler
  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName("");
  };

  // Filter modules by the current course ID
  const courseModules = modules.filter((module: any) => module.course === cid);

  return (
    <div>
      {/* Display module controls only for FACULTY role */}
      {currentUser?.role === "FACULTY" && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={handleAddModule}
        />
      )}
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <GrDrag className="me-2" />
              {!module.editing ? (
                // Display module name if not in editing mode
                module.name
              ) : (
                // Show input field when in editing mode
                <input
                  className="form-control w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                />
              )}
              {/* Display module control buttons only for FACULTY role */}
              {currentUser?.role === "FACULTY" && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              )}
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li
                    key={lesson._id}
                    className="wd-lesson list-group-item p-3 ps-1"
                  >
                    <GrDrag className="me-2" />
                    {lesson.name}
                    {/* Display lesson control buttons only for FACULTY role */}
                    {currentUser?.role === "FACULTY" && (
                      <LessonControlButtons />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Module Editor Modal - visible only for FACULTY role */}
      {currentUser?.role === "FACULTY" && (
        <ModuleEditor
          dialogTitle="Add Module"
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={handleAddModule}
        />
      )}
    </div>
  );
}
