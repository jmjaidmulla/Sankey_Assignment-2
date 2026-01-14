const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskStats = document.getElementById("taskStats");

let totalTasks = 0;
let completedTasks = 0;



// Enable button only if input is not empty
taskInput.addEventListener("input", () => {
    addTaskBtn.disabled = taskInput.value.trim() === "";
    addTaskBtn.style.backgroundColor = "Green";
});



// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.backgroundColor = "green";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "Black";
    deleteBtn.style.border = "black";
    deleteBtn.style.padding = "9px 15px";
    deleteBtn.style.cursor = "pointer";




    // Complete Task
    completeBtn.addEventListener("click", () => {
        if (!span.classList.contains("completed")) {
            span.classList.add("completed");
            completedTasks++;
            completeBtn.remove();  
        }
        updateStats();
    });




    // Delete Task
    deleteBtn.addEventListener("click", () => {
        if (span.classList.contains("completed")) {
            completedTasks--;
        }
        totalTasks--;
        li.remove();
        updateStats();
    });

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    totalTasks++;
    updateStats();

    taskInput.value = "";
    addTaskBtn.disabled = true;
});



// Update stats
function updateStats() {
    taskStats.textContent = `Total: ${totalTasks} | Completed: ${completedTasks}`;
}
