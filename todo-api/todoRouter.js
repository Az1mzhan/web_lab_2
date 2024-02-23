import { Router } from "express";
import todoController from "./TodoController.js";

const todoRouter = new Router();

todoRouter.route("/").get(todoController.getTasks).post(todoController.addTask);

todoRouter
  .route("/:id")
  .delete(todoController.removeTask)
  .put(todoController.updateTask);

export default todoRouter;
