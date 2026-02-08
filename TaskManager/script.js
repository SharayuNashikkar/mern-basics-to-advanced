// DOM elements
const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const reminderSelect = document.getElementById("reminder");
const taskList = document.getElementById("taskList");

// Load from LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim();
  const due = dueDate.value;
  const reminder = reminderSelect.value;

  if (!text || !due) {
    alert("Please enter task and due date");
    return;
  }

  tasks.push({
    id: Date.now(),
    text,
    due,
    reminder,
    completed: false,
    reminded: false
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
  dueDate.value = "";
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";
  const now = new Date();

  tasks.forEach(task => {
    const dueTime = new Date(task.due);
    const diff = dueTime - now;

    let status = "pending";
    if (task.completed) status = "completed";
    else if (diff < 0) status = "overdue";

    if (filter !== "all" && filter !== status) return;

    const li = document.createElement("li");
    li.className = status;

    li.innerHTML = `
      <div class="task-info">
        <strong>${task.text}</strong>
        <small>Due: ${dueTime.toLocaleString()}</small>
        <small>${getRemainingTime(diff)}</small>
      </div>
      <div class="actions">
        <button onclick="toggleTask(${task.id})">✔</button>
        <button class="delete" onclick="deleteTask(${task.id})">✖</button>
      </div>
    `;

    taskList.appendChild(li);

    // Reminder
    if (
      !task.completed &&
      diff <= task.reminder * 60 * 1000 &&
      diff > 0 &&
      !task.reminded
    ) {
      alert(`⏰ Reminder: "${task.text}" is due soon!`);
      task.reminded = true;
      saveTasks();
    }
  });
}

function getRemainingTime(diff) {
  if (diff <= 0) return "Overdue!";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `Remaining: ${h}h ${m}m`;
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function filterTasks(type) {
  renderTasks(type);
}

// Auto refresh remaining time
setInterval(renderTasks, 60000);

// Initial render
renderTasks();
