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

    // Create tick
  const tick = document.createElement("span");
  tick.textContent = "✔️"
  taskItem.appendChild(tick);

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;
  taskItem.appendChild(taskText);

  // Create the Delete button inside the <li>
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  taskItem.appendChild(deleteBtn);


  // Feature A: Toggle completion when clicking the task text
  taskText.addEventListener('click', () => {
    taskText.classList.toggle('completed');
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
