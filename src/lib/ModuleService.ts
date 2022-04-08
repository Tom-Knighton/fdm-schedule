import TeachingModule from "../models/TeachingModule";

const modules: TeachingModule[] = [

    new TeachingModule(1, "Mathematics", "red", new Date(2022, 4, 8), new Date(2022, 4, 10)),
    new TeachingModule(2, "Mathematics", "red", new Date(2022, 4, 12), new Date(2022, 4, 15)),
    new TeachingModule(3, "English", "blue", new Date(2022, 4, 12), new Date(2022, 4, 15))

];

class ModuleService {

    /**
     * Returns the TeachingModule registered with that ID
     * @param id The id of the module to search for
     */
    public static GetModuleById(id: number): TeachingModule {
        return modules.filter(m => m.id == id)[0] ?? null;
    }    

    /**
     * Adds a new module week to the global module array
     * @param module The TeachingModule object to add
     */
    public static AddModuleWeek(module: TeachingModule) {
        modules.push(module);
    }
}


export {
    ModuleService,
    modules
}