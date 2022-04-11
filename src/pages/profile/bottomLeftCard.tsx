import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { ModuleService } from "../../lib/ModuleService";
import { UserService } from "../../lib/UserService";
import { Admin, Trainer, User } from "../../models/Users";
import "./style.css";

const BottomLeftCard = (props: { user: User }) => {
  const [user, setUser] = useState<User>();
  const [loggedInuser, setLoggedInUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = UserService.CurrentUser();
    if (!data) {
      navigate("/");
      return;
    }

    setLoggedInUser(data);
    setUser(props.user);
  }, []);

  function content() {
    if (!user) {
      return;
    }

    if (user instanceof Trainer) {
      return trainerCard();
    } else {
      return schedAdminCard();
    }
  }

  function trainerCard() {
    const trainer = user as Trainer;
    return (
      <Card className="skillSection">
        <div className="skillsList">
          <h3>Skills:</h3>
          {trainer.skills?.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      </Card>
    );
  }

  function schedAdminCard() {
    return (
      <Card className="skillSection">
        <div className="skillsList">
          <h3>Available Modules:</h3>
          { user instanceof Admin && <button className="profBtn">Add new module</button> }
          {ModuleService.GetModules().map((module) => (
            <p key={module.id}>{module.getFullName()}</p>
          ))}
        </div>
      </Card>
    );
  }

  return <>{content()}</>;
};

export default BottomLeftCard;
