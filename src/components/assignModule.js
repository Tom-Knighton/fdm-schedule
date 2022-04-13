import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Admin, Scheduler, Trainer, User, UserRole } from "../models/Users";
import "../lib/UserService";
import "../pages/styleform.css";
import { UserService, users } from "../lib/UserService";
import { ModuleService } from "../lib/ModuleService";

// main role: scheduler adds skills to trainer
// loops through list of users and loads trainer users into drop down. (now using harcoded users)
// manually add in tasks

export default function AssignModule(props) {
  const navigate = useNavigate();
  function assignModule(e) {
    e.preventDefault();
    alert("Test!");

    const data = new FormData(e.target);
    let userName = data.get("users");
    let moduleName = data.get("modules");

    if (userName == "Select..." || moduleName == "Select...") {
      alert("Please select a trainer or module or both.");
    } else {
      const user = props.user;
      const module = ModuleService.GetModuleById(moduleName);
      user.AddModule(module);
      navigate(`profile/${user.username}`, { replace: true });

      if (user.modules.filter((m) => m.id === module.id).length > 0) {
        alert("This trainer already has this module assigned to them.");
      }
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
        <h5>Select a trainer and the module you want to assign to them.</h5>

        <div id="assignTrainerSelect">
          <label for="users">Select a trainer:</label>
          <select name="users">
            <option value="selectUser">Select...</option>
            <option value="User 2">User 2</option>
            <option value="Mustafa Bozkurt">Mustafa Bozkurt</option>
          </select>
        </div>

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
          <input type="submit">Assign module</input>
        </div>
      </form>
    </div>
  );
}
