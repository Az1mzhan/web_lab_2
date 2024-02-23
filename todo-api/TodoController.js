import Task from "../models/Task.js";

class TodoController {
  getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});

      res.render("pages/tasks", {
        tasks: tasks,
      });
    } catch (err) {
      console.error(err);

      res
        .status(400)
        .send({ result: "The server couldn't load the todo page" });
    }
  };

  addTask = async (req, res) => {
    console.log(Task.find({ title: "Tidy the room" }));

    try {
      const { title, description } = req.body;

      const isExisting = await Task.findOne({ title: title });

      console.log(isExisting);

      if (isExisting)
        return res.status(200).send({ result: "The task already exists" });

      const task = new Task({ title: title, description: description });

      await task.save();

      res
        .status(200)
        .send({ result: "The task has been saved to the database" });
    } catch (err) {
      console.error(err);

      res.status(400).send({ result: "The server couldn't add this task" });
    }
  };

  removeTask = async (req, res) => {
    try {
      const { id } = req.params;

      await Task.findByIdAndDelete(id);

      res.status(200).send({ result: "The task has been removed" });
    } catch (err) {
      console.error(err);

      res.status(400).send({ result: "The server couldn't remove this task" });
    }
  };

  updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;

      const updatedObject = {};
      if (description && description !== "")
        updatedObject.description = description;

      if (Object.keys(updatedObject).length > 0)
        await Task.findByIdAndUpdate(id, updatedObject);

      res.status(200).send({ result: "The task has been updated" });
    } catch (err) {
      console.error(err);

      res.status(400).send({ result: "The server couldn't update this task" });
    }
  };
}

export default new TodoController();
