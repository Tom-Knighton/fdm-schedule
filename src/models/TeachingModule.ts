export default class TeachingModule {
    constructor(public id: number, public moduleName: string, public moduleColour: string, public start: Date, public end: Date) {}

    getFullName() {
        console.log(this);
        return `${this.moduleName} ${new Date(this.start).toISOString().slice(0, 10).replace('/-/g', '/')} ${new Date(this.end).toISOString().slice(0, 10)}`;
    }
}