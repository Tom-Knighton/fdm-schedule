import React from "react";
import { useNavigate } from "react-router-dom";
import "../lib/UserService";
import "../pages/styleform.css";
import { ModuleService } from "../lib/ModuleService";

// main role: scheduler adds skills to trainer
// loops through list of users and loads trainer users into drop down. (now using harcoded users)
// manually add in tasks

export default function AssignModule(props) {
  const navigate = useNavigate();
  function assignModule(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    let moduleName = data.get("modules");

    if (moduleName == "selectOption") {
      alert("Please select a module.");
    } else {
      const user = props.user;
      const module = ModuleService.GetModuleById(moduleName);
      if (user.modules.filter((m) => m.id === module.id).length > 0) {
        alert("This trainer already has this module assigned to them.");
        return;
      }

      user.AddModule(module);
      alert("Module assignment was successful!");
      navigate(`/profile/${user.username}`, { replace: true });
    }
  }
  // store drop down inputs in variables to use later in if/else statement
  // if either drop down inputs are "select..." then use alerts to warn them
  // else use while/for loop with boolean var which set to true if module already assigned
  // if module exists already, then alert them again,
  // else just assign as normal and redirect to main page.

  return (
    <div>
      <form id="assignUserSelect" onSubmit={assignModule}>
        <h1>Assign trainer to module</h1>
        <h5>Select a module you want to assign to this trainer.</h5>

        <div id="assignModuleSelect">
          <label for="modules">Select a module:</label>
          <select name="modules" id="modules">
            <option value="selectOption">Select...</option>
            {ModuleService.GetModules().map((Module) => (
              <option value={Module.id}>{Module.getFullName()}</option>
            ))}
          </select>
        </div>

        <div id="assignButtons">
          <button type="submit" value="Assign module">
            Assign module
          </button>
        </div>
      </form>
    </div>
  );
}
