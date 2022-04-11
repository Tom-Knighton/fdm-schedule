import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { UserService } from "../../lib/UserService";
import { Admin, Scheduler, Trainer, User, UserRole } from "../../models/Users";
import Modal from "react-modal";
import  Search from "../search";

const RightColumn = (props: { user: User }) => {
  const [user, setUser] = useState<User>();
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
    if (user instanceof Trainer) {
      return trainerContent();
    } else if (user instanceof Admin) {
      return adminContent();
    }
  }

  function trainerContent() {
    const trainer = user as Trainer;
    return (
      <>
        <Card className="modulesCard">
          <div className="modulesList">
            {trainer.modules.map((module) => (
              <p
                key={module.id}
                style={{ backgroundColor: module.moduleColour }}
              >
                {module.getFullName()}
              </p>
            ))}
            {trainer.modules.length === 0 && (
              <span>This user has no assigned modules</span>
            )}
          </div>
          <div className="spacer" />
          {(loggedInUser instanceof Admin ||
            loggedInUser instanceof Scheduler) && (
            <button
              className="profBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Add Module
            </button>
          )}
        </Card>
        <Card className="calendarCard">
          <p>Calendar goes here :)</p>
        </Card>
      </>
    );
  }

  function adminContent() {
    return (
      <>
        <Card className="modulesCard">
         <Search/>
        </Card>
        <Card className="calendarCard">
          <div className="modulesList">
            <span>No notifications</span>
          </div>
          <div className="spacer" />
        </Card>
      </>
    );
  }

  function addModuleModal() {
    return <></>;
  }

  return (
    <>
      <Modal isOpen={modalOpen} className="Modal" overlayClassName="Overlay">
        {addModuleModal()}
      </Modal>
      {content()}
    </>
  );
};

export default RightColumn;
