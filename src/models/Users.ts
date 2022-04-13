import { UserService } from "../lib/UserService";
import TeachingModule from "./TeachingModule";

export abstract class User {
    constructor(public name: string, public username: string, public email: string, public password: string, public profilePicUrl: string, public location: string, public timezone: string) {}
};

export class Scheduler extends User {
    constructor(name: string, username: string, password: string, email: string, profilePicUrl: string, location: string, timeZone: string, public schedulerId: string, public officeNumber: string) {
        super(name, username, email, password, profilePicUrl, location, timeZone);
    }
}

export class Trainer extends User {
    constructor(name: string, username: string, password: string, email: string, profilePicUrl: string, location: string, timeZone: string, public trainerId: string, public phoneNumber: string, public skills: string[], public modules: TeachingModule[], public availability: Date[][], public remoteTeaching: boolean) {
        super(name, username, email, password, profilePicUrl, location, timeZone);
    }

    AddSkill(skillname: string) {
        this.skills.push(skillname);
    }

    AddModule(module: TeachingModule) {
        this.modules.push(module);
        UserService.AddModuleToUser(this.username, module);
    }
}

export class Admin extends User {
    constructor(name: string, username: string, password: string, email: string, profilePicUrl: string, location: string, timeZone: string, public adminId: string) {
        super(name, username, email, password, profilePicUrl, location, timeZone);
    }
}

export enum UserRole {
    trainer,
    scheduler,
    admin
};