import "./style.css";

import Card from "../../components/Card";
import { Trainer, User } from "../../models/Users";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserService } from "../../lib/UserService";

const ProfilePage = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    if (!username) {
      setUser(UserService.CurrentUser());
      return;
    }

    const user = UserService.GetUserByUsername(username ?? "");
    if (!user) {
      navigate("/profile", { replace: true });
    }

    setUser(user);
  }, [username]);

  return (
    <div>
      {user && (
        <div className="columns">
          <div className="leftColumn">
            <Card className="profileCard">
              <div className="imageContainer">
                <img src={user.profilePicUrl} />
              </div>
              <h3>{user.name}</h3>
              <h5>{user.email}</h5>
            </Card>
            <Card className="skillSection">
              <div className="skillsList">
                <h3>Skills:</h3>
                {(user as Trainer).skills?.map((skill) => (
                  <p>{skill}</p>
                ))}
              </div>
            </Card>
          </div>

          <div className="centerColumn">
            <Card className="modulesCard">
              <div className="modulesList">
                {(user as Trainer).modules.map((module) => (
                  <p style={{ backgroundColor: module.moduleColour }}>
                    {module.moduleName}
                  </p>
                ))}
              </div>
              <div className="spacer" />
              <button>Add Module</button>
            </Card>
            <Card className="calendarCard">
              <p>Calendar goes here :)</p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
