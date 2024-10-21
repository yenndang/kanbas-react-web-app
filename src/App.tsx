import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Editor from "./Kanbas/Courses/Assignments/Editor";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route
            path="/Kanbas/Courses/:cid/Assignments/:assignmentId"
            element={<Editor />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}
