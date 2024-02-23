import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

class ClientController {
  createTask = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    await axios
      .post("/todos", {
        title: title,
        description: description,
      })
      .then(() => {
        window.location.href = "/todos";
      });
  };

  updateTask = async (taskId) => {
    const description = document.getElementById("edit-description").value;

    console.log("description: ", description);

    await axios
      .put(`/todos/${taskId}`, {
        description: description,
      })
      .then(() => {
        window.location.href = "/todos";
      });
  };

  removeTask = async (e) => {
    const taskId = e.target.value;

    if (!taskId) return;

    await axios.delete(`/todos/${taskId}`).then(() => {
      window.location.href = "/todos";
    });
  };
}

export default new ClientController();
