import clientController from "./ClientController.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-btn")
    .addEventListener("click", clientController.createTask);

  setInterval(() => {
    const editTaskButtons = document.querySelectorAll(".edit-task-btn");

    editTaskButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const taskId = e.target.value;

        if (!taskId) return;

        const editTaskSubmitButton =
          document.getElementById("edit-task-submit");

        editTaskSubmitButton.value = taskId;

        editTaskSubmitButton.addEventListener("click", async (e) => {
          const taskId = e.target.value;

          console.log(taskId);

          await clientController.updateTask(taskId);
        });
      });
    });

    const removeTaskButtons = document.querySelectorAll(".remove-task-btn");

    removeTaskButtons.forEach((button) => {
      button.addEventListener("click", clientController.removeTask);
    });
  }, 1000);
});
