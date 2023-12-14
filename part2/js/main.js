function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a valid task");
    return;
  }

  let taskItem = document.createElement("div");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
    <div class="task-content">${taskInput.value}</div>
    <div class="buttons-container">
      <button onclick="completeTask(this)" class="complete-btn">&#10003;</button>
      <button onclick="deleteTask(this)" class="delete-btn">&#10005;</button>
    </div>
  `;

  taskList.insertBefore(taskItem, taskList.firstChild);
  taskInput.value = "";
}

function completeTask(button) {
  let taskItem = button.parentNode.parentNode;
  taskItem.classList.toggle("completed");
  let completeButton = taskItem.querySelector(".buttons-container button");
  completeButton.innerHTML = taskItem.classList.contains("completed")
    ? "Undo"
    : "&#10003;";
}

function deleteTask(button) {
  let taskItem = button.parentNode.parentNode;
  let taskList = document.getElementById("taskList");
  taskList.removeChild(taskItem);
}
