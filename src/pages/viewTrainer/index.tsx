import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./style.css";

import Card from "../../components/Card";
import { Trainer } from "../../models/Users";
import { Module } from "../../models/Module";

const viewTrainer = (props: { user: Trainer }) => {
  return (
    <div className="columns">
      <div className="leftColumn">
        <Card className="profileCard">
          <div className="imageContainer">
            <img src={props.user.profilePicUrl} />
          </div>
          <h3>{props.user.name}</h3>
          <h5>{props.user.email}</h5>
        </Card>
        <Card className="skillSection">
          <div className="skillsList">
            <h3>Skills:</h3>
            {props.user.skills?.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        </Card>
      </div>

      <div className="centerColumn">
        <Card className="modulesCard">
          <div className="modulesList">
          {props.user.modules.map((module) => (
            <p style={{ backgroundColor: module.moduleColour}}>{module.moduleName}</p>
          ))}
          </div>
          <div className="spacer"/>
          <button>Add Module</button>
        </Card>
        <Card className="calendarCard">
          <p>Calendar goes here :)</p>
        </Card>
      </div>
    </div>
  );
};

export default viewTrainer;
