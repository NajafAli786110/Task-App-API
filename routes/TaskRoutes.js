import express from "express";
import {
  createNewTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} from "../controllers/TaskControllers.js";

const AppTasksRoutes = express();

AppTasksRoutes.route("/").post(createNewTasks).get(getTasks);
AppTasksRoutes.route("/:id").patch(updateTasks).delete(deleteTasks);

export default AppTasksRoutes;
