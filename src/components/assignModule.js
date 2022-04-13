import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Admin, Scheduler, Trainer, User, UserRole } from "../models/Users";
import "../lib/UserService";
import "../pages/styleform.css";
import { UserService, users } from "../lib/UserService";

// main role: scheduler adds skills to trainer
// loops through list of users and loads trainer users into drop down. (now using harcoded users)
// manually add in tasks

export default function assignModule() {
  function assignModule(e) {
    e.preventDefault();
    alert("Test!");

    const data = new FormData(e.target);
    let userName = data.get(users);
    let moduleName = data.get(modules);

    if (userName == "Select..." || moduleName == "Select...") {
      alert("Please select a trainer or module or both.");
    } else {
      for (const user of users) {
        if (user instanceof Trainer && user.name == userName) {
          for (const module of modules) {
            let alreadyExists = false;
            if (module == moduleName) {
              alert(
                "Module already exists for this trainer. Module not assigned to trainer."
              );
              alreadyExists = true;
            }

            if (!alreadyExists) {
              // add module here
              user.AddModule(moduleName);
              alert("Module " + moduleName + " added to trainer.");
              // redirect
              useNavigate("/profile", { replace: true });
            }
          }
        }
      }
    }

    // store drop down inputs in variables to use later in if/else statement
    // if either drop down inputs are "select..." then use alerts to warn them
    // else use while/for loop with boolean var which set to true if module already assigned
    // if module exists already, then alert them again,
    // else just assign as normal and redirect to main page.
  }

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
            <optgroup label="Professional">
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Communication">Communication</option>
              <option value="A-Level Mathematics">A-Level Mathematics</option>
              <option value="Lecturing">Lecturing</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Visual Paradigm">Visual Paradigm</option>
            </optgroup>
            <optgroup label="Recreational">
              <option value="Juggling">Juggling</option>
              <option value="Photography">Photography</option>
              <option value="Coin-based magic tricks">
                Coin-based magic tricks
              </option>
            </optgroup>
          </select>
        </div>

        <div id="assignButtons">
          <input type="submit">Add module</input>
        </div>
      </form>
    </div>
  );
}
