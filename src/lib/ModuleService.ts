import TeachingModule from "../models/TeachingModule";
import { Buffer } from "buffer";

const modules: TeachingModule[] = [
  new TeachingModule(
    1,
    "Mathematics",
    "red",
    new Date(2022, 4, 8),
    new Date(2022, 4, 10)
  ),
  new TeachingModule(
    2,
    "Mathematics",
    "red",
    new Date(2022, 4, 12),
    new Date(2022, 4, 15)
  ),
  new TeachingModule(
    3,
    "English",
    "blue",
    new Date(2022, 4, 12),
    new Date(2022, 4, 15)
  ),
];

class ModuleService {
  /**
   * Returns the current modules array
   * @returns TeachingModule[]
   */
  static GetModules(): TeachingModule[] {
    const data = localStorage.getItem("moddata");
    if (!data) {
      this.syncWithStorage();
      return modules;
    }

    try {
      let modules: TeachingModule[] = [];
      JSON.parse(Buffer.from(data, "base64").toString()).forEach(m => {
          modules.push(this.GetObj(m));
      })
      return modules;
    } catch {
      return [];
    } finally {
      this.syncWithStorage();
    }
  }

  public static GetObj(module: any): TeachingModule {
    let rModule = new TeachingModule(0, "", "", new Date(), new Date());
    Object.assign(rModule, module);
    return rModule;
  }

  /**
   * Returns the TeachingModule registered with that ID
   * @param id The id of the module to search for
   */
  public static GetModuleById(id: number): TeachingModule {
    return this.GetModules().filter((m) => m.id == id)[0] ?? null;
  }

  /**
   * Adds a new module week to the global module array
   * @param module The TeachingModule object to add
   */
  public static AddModuleWeek(module: TeachingModule) {
    modules.push(module);
    this.syncWithStorage();
  }

  /**
   * Syncs modules array with storage
   */
  static syncWithStorage() {
    let buffer = Buffer.from(JSON.stringify(modules));
    localStorage.setItem("moddata", buffer.toString("base64"));
  }
}

export { ModuleService };
