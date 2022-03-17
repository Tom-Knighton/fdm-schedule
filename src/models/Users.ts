import Module from "module";

export abstract class User {
    constructor(public name: String, public username: String, public password: String, public location: String, public timezone: String) {}
};

export class Scheduler extends User {
    constructor(name: String, username: String, password: String, location: String, timeZone: String, public schedulerId: String, public officeNumber: String) {
        super(name, username, password, location, timeZone);
    }
}

export class Trainer extends User {
    constructor(name: String, username: String, password: String, location: String, timeZone: String, public trainerId: String, public phoneNumber: String, public skills: String[], public modules: Module[], public availability: Date[][], public remoteTeaching: boolean) {
        super(name, username, password, location, timeZone);
    }

    AddSkill(skillname: String) {
        this.skills.push(skillname);
    }

    AddModule(module: Module) {
        this.modules.push(module);
    }
}

export class Admin extends User {
    constructor(name: String, username: String, password: String, location: String, timeZone: String, public adminId: String) {
        super(name, username, password, location, timeZone);
    }
}

export enum UserRole {
    trainer,
    scheduler,
    admin
};