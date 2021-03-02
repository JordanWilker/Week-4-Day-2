import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
<<<<<<< HEAD
=======
import JobsController from "./Controllers/JobsController.js";
>>>>>>> a7121bd2161da285494fa70ed57ae465d8c135c7
import ValuesController from "./Controllers/ValuesController.js";
import JobsController from "./Controllers/JobsController.js"


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
}

window["app"] = new App();
