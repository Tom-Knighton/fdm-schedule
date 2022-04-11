import "./style.css";

import Card from "../../components/Card";
import { Trainer, User } from "../../models/Users";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserService } from "../../lib/UserService";
import BottomLeftCard from "./bottomLeftCard";
import RightColumn from "./rightColumn";

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

            <BottomLeftCard user={user}/>
          </div>

          <div className="centerColumn">
            <RightColumn user={user}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
