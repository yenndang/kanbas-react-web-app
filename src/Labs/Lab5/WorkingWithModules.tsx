import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithModules() {
  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");

  return (
    <div id="wd-working-with-modules">
      <h3>Working with Modules</h3>

      {/* Retrieve Module */}
      <a
        id="wd-get-module"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/module`}
        target="_blank"
      >
        Get Module
      </a>

      {/* Retrieve Module Name */}
      <a
        id="wd-get-module-name"
        className="btn btn-success me-2"
        href={`${REMOTE_SERVER}/lab5/module/name`}
        target="_blank"
      >
        Get Module Name
      </a>

      <hr />

      {/* Update Module Name */}
      <input
        className="form-control mb-2"
        placeholder="New Module Name"
        value={newModuleName}
        onChange={(e) => setNewModuleName(e.target.value)}
      />
      <a
        id="wd-update-module-name"
        className="btn btn-warning me-2"
        href={`${REMOTE_SERVER}/lab5/module/name/${newModuleName}`}
        target="_blank"
      >
        Update Module Name
      </a>
      <hr />

      {/* Update Module Description */}
      <input
        className="form-control mb-2"
        placeholder="New Module Description"
        value={newModuleDescription}
        onChange={(e) => setNewModuleDescription(e.target.value)}
      />
      <a
        id="wd-update-module-description"
        className="btn btn-info"
        href={`${REMOTE_SERVER}/lab5/module/description/${newModuleDescription}`}
        target="_blank"
      >
        Update Module Description
      </a>
    </div>
  );
}
