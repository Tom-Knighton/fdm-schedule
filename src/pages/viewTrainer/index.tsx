import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./style.css";

import Card from "../../components/Card";
import { Trainer, User } from "../../models/Users";

const viewTrainer = (props: { user: Trainer }) => {
  return (
    <div className="columns">
      <div className="leftColumn">
        <Card>
          <div className="profileCard">
            <div className="imageContainer">
              <img src={props.user.profilePicUrl} />
            </div>
            <h3>{props.user.name}</h3>
            <h5>{props.user.email}</h5>
          </div>
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
      <div className="centerColumn">j</div>
    </div>
  );
};

export default viewTrainer;
