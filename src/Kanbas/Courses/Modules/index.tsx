export default function Modules() {
  return (
    <div>
      {/* Header buttons for collapsing, progress, and module control */}
      <div className="wd-modules-header">
        <button>Collapse All</button>
        <button>View Progress</button>

        {/* Publish All dropdown */}
        <select className="wd-publish-all-dropdown">
          <option value="publish">Publish All</option>
          <option value="unpublish">Unpublish All</option>
        </select>

        <button>+ Module</button>
      </div>

      {/* Modules list */}
      <ul id="wd-modules">
        {/* Module for Week 1 */}
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User Interfaces
                  With HTML
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module for Week 2 */}
        <li className="wd-module">
          <div className="wd-title">
            Week 2, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to Netlify
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML and the DOM
                </li>
                <li className="wd-content-item">
                  Formatting Web content with Headings and Paragraphs
                </li>
                <li className="wd-content-item">
                  Formatting content with Lists and Tables
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
