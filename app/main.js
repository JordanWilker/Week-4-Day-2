import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";
import ValuesController from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
}

window["app"] = new App();
