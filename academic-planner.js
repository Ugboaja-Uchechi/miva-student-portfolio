let taskInput = document.querySelector(".task-input");
let addTaskButton = document.querySelector(".add-task-btn");
let taskList = document.querySelector(".task-list");

const addTask = () => {
  const taskValue = taskInput.value.trim();

  if (taskValue == "") {
    alert("Please enter a valid task")
    return;
  }

  const taskItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskLabel = document.createElement("label");
  taskLabel.classList.add("ios-checkbox", "red");

  const checkboxWrapper = document.createElement("span");
  checkboxWrapper.classList.add("checkbox-wrapper");

  const checkboxBackground = document.createElement("span");
  checkboxBackground.classList.add("checkbox-bg");

  const checkboxIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  checkboxIcon.classList.add("checkbox-icon");
  checkboxIcon.setAttribute("viewBox", "0 0 24 24");
  checkboxIcon.setAttribute("fill", "none");

  const checkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  checkPath.classList.add("check-path");
  checkPath.setAttribute("d", "M4 12L10 18L20 6");
  checkPath.setAttribute("stroke", "currentColor");
  checkPath.setAttribute("stroke-width", "3");
  checkPath.setAttribute("stroke-linecap", "round");
  checkPath.setAttribute("stroke-linejoin", "round");
  checkboxIcon.appendChild(checkPath);
  checkboxWrapper.append(checkboxBackground, checkboxIcon);

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;
  taskLabel.append(checkbox, checkboxWrapper, taskText);
  taskItem.appendChild(taskLabel);

  // Create the Delete button inside the <li>
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  taskItem.appendChild(deleteBtn);


  checkbox.addEventListener("change", () => {
    taskText.classList.toggle("completed", checkbox.checked);
  });

  // Feature B: Remove the item entirely when clicking the delete button
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskList.appendChild(taskItem);

  taskInput.value = ""; // Clear the input field after adding the task
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
