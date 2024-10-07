import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kanbas from "../Kanbas";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h3>Yen Dang</h3>
      <div>
        <a
          id="wd-github"
          href="https://github.com/yenndang/kanbas-react-web-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Kanbas" element={<Kanbas />} />
      </Routes>
    </div>
  );
}
