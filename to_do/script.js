const input = document.querySelector(".input-text input");
const addBtn = document.querySelector(".input-text button");
const tasksContainer = document.querySelector(".tasks");
const newTaskCountText = document.querySelector(".footer .new-tasks");
const remainingTaskText = document.querySelector(".footer .remaining-tasks");

let newTaskCount = 0;

function updateCounts() {
  const allTasks = tasksContainer.querySelectorAll(".box1");
  let remaining = 0;
  allTasks.forEach(taskBox => {
    const checkBox = taskBox.querySelector(".check-box input");
    if (!checkBox.checked) remaining++;
  });
  newTaskCountText.textContent = `New added Task: ${newTaskCount}`;
  remainingTaskText.textContent = `Your remaining to do: ${remaining}`;
}

function setupTask(taskBox, isNew = false) {
  const checkBoxInput = taskBox.querySelector(".check-box input");
  const text = taskBox.querySelector(".text");
  const delBtn = taskBox.querySelector(".button-x");

  if (checkBoxInput.checked) text.style.textDecoration = "line-through";

  checkBoxInput.addEventListener("change", () => {
    text.style.textDecoration = checkBoxInput.checked ? "line-through" : "none";
    updateCounts();
  });

  delBtn.addEventListener("click", () => {
    if (isNew) newTaskCount--;
    taskBox.remove();
    updateCounts();
  });
}

// Setup default tasks
document.querySelectorAll(".tasks .box1").forEach(taskBox => setupTask(taskBox, false));
updateCounts();

// Add new tasks
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) return;

  const taskBox = document.createElement("div");
  taskBox.classList.add("box1");

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("check-box");
  const checkBoxInput = document.createElement("input");
  checkBoxInput.type = "checkbox";
  checkBoxLabel.appendChild(checkBoxInput);

  const text = document.createElement("nav");
  text.classList.add("text");
  text.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.classList.add("button-x");
  delBtn.textContent = "x";

  taskBox.appendChild(checkBoxLabel);
  taskBox.appendChild(text);
  taskBox.appendChild(delBtn);

  tasksContainer.appendChild(taskBox);

  newTaskCount++;
  setupTask(taskBox, true);
  updateCounts();

  input.value = "";
});
