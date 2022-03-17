import { Admin, Scheduler, Trainer, User, UserRole } from "../models/Users";

const users: Array<User> = [
    new Scheduler("User 1", "user1", "xxx", "London", "UTC", "scheduler1", "office1"),
    new Trainer("User 2", "user2", "xxx", "London", "UTC", "trainer1", "01000", [], [], [[]], true),
    new Admin("User 3", "user3", "xxx", "London", "UTC", "admin1"),
];

class UserService {

    /* Returns a valid User object if one was found, will return null if invalid */
    static Login(username: String, password: String): User | null {
        const validUsers = users.filter(u => u.username === username && u.password === password);
        return validUsers.length > 0 ? validUsers[0] : null;
    }

    /* Returns a of user with the specified username, will return null if no user found */
    static GetUserByUsername(username: String): User | null {
        const validUsers = users.filter(u => u.username === username);
        return validUsers.length > 0 ? validUsers[0] : null;
    }

    /* Returns an array of users matching a name  */
    static SearchByName(name: string): User[] {
        const validUsers = users.filter(u => u.name.toUpperCase().includes(name.toUpperCase()));
        console.log("here");
        console.log(validUsers);
        return validUsers;
    }

    /* Returns the type of user */
    static GetRoleOfUser(user: User): UserRole {
        if (user instanceof Admin) {
            return UserRole.admin;
        }
        else if (user instanceof Scheduler) {
            return UserRole.scheduler;
        }
        else {
            return UserRole.trainer;
        }
    }
}


export {
    UserService,
}
