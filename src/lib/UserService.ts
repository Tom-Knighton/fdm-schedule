import { Admin, Scheduler, Trainer, User, UserRole } from "../models/Users";
import { ModuleService } from "./ModuleService";
import { Buffer } from "buffer";
import TeachingModule from "../models/TeachingModule";

let users: Array<User> = [
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
    [
      "Microsoft Office",
      "Communication",
      "A-Level Mathematics",
      "Photography",
      "Juggling",
      "Coin-based magic tricks",
    ],
    [ModuleService.GetModuleById(1), ModuleService.GetModuleById(3)],
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
  new Trainer(
    "Mustafa Bozkurt",
    "mboz",
    "xxx",
    "m.bozkurt@fdmgroup.com",
    "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "London",
    "UTC",
    "trainer2",
    "12345",
    [
      "Lecturing",
      "Software Engineering",
      "Visual Paradigm",
      "Java",
      "Juggling",
      "Coin-based magic tricks",
    ],
    [],
    [[]],
    true
  ),
];

class UserService {
  /**
   * Returns the current users array (synced)
   */
  static GetUsers(): User[] {
    const data = localStorage.getItem("data");
    if (!data) {
      console.log("no data???")
      this.syncWithStorage();
      return users;
    }

    try {
      let usrs = JSON.parse(Buffer.from(data, 'base64').toString()) as User[];
      users = usrs;
      return usrs;
    } catch {
      return [];
    } finally {
      this.syncWithStorage();
    }

  }

  /* Returns a valid User object if one was found, will return null if invalid */
  static Login(username: String, password: String): User | null {
    const validUsers = this.GetUsers().filter(
      (u) => u.username === username && u.password === password
    );
    this.syncWithStorage();
    return validUsers.length > 0 ? validUsers[0] : null;
  }

  static LoginByEmail(email: String, password: String): User | null {

    const validUsers = this.GetUsers().filter(
      (u) => u.email === email && u.password === password
    );
    this.syncWithStorage();
    const r =  validUsers.length > 0 ? this.GetObjType(validUsers[0]) : null;
    return r;
  }

  /* Returns a of user with the specified username, will return null if no user found */
  static GetUserByUsername(username: String): User | null {
    const validUsers = this.GetUsers().filter((u) => u.username === username);
    this.syncWithStorage();
    const r =  validUsers.length > 0 ? this.GetObjType(validUsers[0]) : null;
    return r;
  }

  /* Returns an array of users matching a name  */
  static SearchByName(name: string): User[] {
    const validUsers = this.GetUsers().filter((u) =>
      u.name.toUpperCase().includes(name.toUpperCase())
    );
    this.syncWithStorage();
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

  /**
   * Returns the current logged in user or null if no user data found
   * @returns The User object or null
   */
  static CurrentUser(): User | null {
    const localData = localStorage.getItem("user");
    if (!localData) {
      return null;
    }

    let usr = JSON.parse(localStorage.getItem("user") ?? "");
    usr = this.GetUserByUsername(usr.username);
    return this.GetObjType(usr);

  }

  private static GetObjType(usr: any): User | null {
    if (usr.schedulerId) {
      let scheduler = new Scheduler("", "", "", "", "", "", "", "", "");
      Object.assign(scheduler, usr);
      return scheduler;
    } else if (usr.trainerId) {
      let trainer = new Trainer(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        [],
        [],
        [[]],
        false
      );
      Object.assign(trainer, usr);

      let correctModules: TeachingModule[] = [];
      trainer.modules.forEach((m) => {
        correctModules.push(ModuleService.GetObj(m));
      });
      trainer.modules = correctModules;

      return trainer;
    } else if (usr.adminId) {
      let admin = new Admin("", "", "", "", "", "", "", "");
      Object.assign(admin, usr);
      return admin;
    } else {
      return null;
    }
  }

  static AddModuleToUser(username: string, module: TeachingModule) {
    const index = users.findIndex(u => u.username === username);
    const user = users[index] as Trainer;
    user.modules.push(module);
    users[index] = user;
    console.log(users[index]);
    this.syncWithStorage(users);
  }

  /**
   * Syncs users array with storage
   */
  static syncWithStorage(usersToSave: User[] | null = null) {
    console.log(usersToSave);
    let buffer = Buffer.from(JSON.stringify(usersToSave ?? users));
    localStorage.setItem("data", buffer.toString("base64"));
  }

}

export { UserService };
