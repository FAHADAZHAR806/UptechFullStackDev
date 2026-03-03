const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const saveTasks = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

function addTask() {
  const text = input.value.trim();
  if (!text) return alert("Please enter a task!");

  const tasks = getTasks();
  tasks.push(text);
  saveTasks(tasks);

  input.value = "";
  render();
}

function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  render();
}

function editTask(index) {
  const tasks = getTasks();
  const updated = prompt("Edit task:", tasks[index]);
  if (updated && updated.trim()) {
    tasks[index] = updated.trim();
    saveTasks(tasks);
    render();
  }
}

function clearAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    localStorage.removeItem("tasks");
    render();
  }
}

function render() {
  const tasks = getTasks();
  taskCount.textContent = `${tasks.length} Task${tasks.length !== 1 ? "s" : ""}`;

  taskList.innerHTML = tasks
    .map(
      (task, i) => `
    <li class="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <span class="flex-1 break-words text-gray-700">${task}</span>
      <div class="flex gap-2 ml-3">
        <button onclick="editTask(${i})"
          class="px-3 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500">
          Edit
        </button>
        <button onclick="deleteTask(${i})"
          class="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </li>
  `,
    )
    .join("");
}

render();
