import React from "react";
import { useState } from "react";
import "../pages/styleform.css";

// main role: scheduler adds skills to trainer
// loops through list of users and loads trainer users into drop down.
// manually add in tasks

/* 
check if:
  - one or both drop downs are empty
  - a trainer already has the module

if all good, add the module to trainer and perhaps change h5 text to say successful
if checks fail, bolden the labels, make them red and change text as required

*/

export default function assignModule() {
  return (
    <div>
      <form id="assignUserSelect">
        <h1>Assign trainer to module</h1>
        <h5>Select a trainer and the module you want to assign to them.</h5>

        <div id="assignTrainerSelect"></div>

        <div id="assignModuleSelect">
          <label for="modules">Select a module:</label>
          <select name="modules" id="modules">
            <option value="selectOption">Select module</option>
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

        <div id="assignButtons"></div>
      </form>
    </div>
  );
}
