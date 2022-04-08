export default class TeachingModule {
    constructor(public id: number, public moduleName: string, public moduleColour: string, public start: Date, public end: Date) {}

    getFullName() {
        return `${this.moduleName} ${this.start.toISOString().slice(0, 10).replace('-', '/')} - ${this.end.toISOString().slice(0, 10).replace('-', '/')}`;
    }
}