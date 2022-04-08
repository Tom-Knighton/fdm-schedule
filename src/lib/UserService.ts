import { Admin, Scheduler, Trainer, User, UserRole } from "../models/Users";

export const users: Array<User> = [
  new Scheduler(
    "User 1",
    "user1",
    "xxx",
    "johnsmith@gmail.com",
    "https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png",
    "London",
    "UTC",
    "scheduler1",
    "office1"
  ),
  new Trainer(
    "User 2",
    "user2",
    "xxx",
    "johnsmith2@gmail.com",
    "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "London",
    "UTC",
    "trainer1",
    "01000",
    ["Microsoft Office", "Communication", "A-Level Mathematics", "Photography", "Juggling", "Coin-based magic tricks"],
    [],
    [[]],
    true
  ),
  new Admin(
    "User 3",
    "user3",
    "xxx",
    "johnsmith3@gmail.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU",
    "London",
    "UTC",
    "admin1"
  ),
];

class UserService {
  /* Returns a valid User object if one was found, will return null if invalid */
  static Login(username: String, password: String): User | null {
    const validUsers = users.filter(
      (u) => u.username === username && u.password === password
    );
    return validUsers.length > 0 ? validUsers[0] : null;
  }

  /* Returns a of user with the specified username, will return null if no user found */
  static GetUserByUsername(username: String): User | null {
    const validUsers = users.filter((u) => u.username === username);
    return validUsers.length > 0 ? validUsers[0] : null;
  }

  /* Returns an array of users matching a name  */
  static SearchByName(name: string): User[] {
    const validUsers = users.filter((u) =>
      u.name.toUpperCase().includes(name.toUpperCase())
    );
    console.log("here");
    console.log(validUsers);
    return validUsers;
  }

  /* Returns the type of user */
  static GetRoleOfUser(user: User): UserRole {
    if (user instanceof Admin) {
      return UserRole.admin;
    } else if (user instanceof Scheduler) {
      return UserRole.scheduler;
    } else {
      return UserRole.trainer;
    }
  }
}

export { UserService };
