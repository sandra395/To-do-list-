// Get elements from the DOM
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");
const taskDateInput = document.getElementById("taskDate");

// Add task when "Add" button is clicked
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Get task description
    const taskDate = taskDateInput.value.trim(); // Get task date

    // Only create task if both text and date are provided
    if (taskText !== "" && taskDate !== "") {
        createTask(taskText, taskDate); // Create and display task
        taskInput.value = ""; // Clear task input
        taskDateInput.value = ""; // Clear date input
    } else {
        alert("Please enter a task and a date!"); // Alert if inputs are empty
    }
});

// Function to create a new task and add it to the task list
function createTask(text, date) {
    // Create task item for the task list
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Set the content of the task item, including the task text, task date, and delete button
    taskItem.innerHTML = `
        <span>${text}</span> - <span class="task-date">${date}</span>
        <button class="delete">Delete</button>
    `;

    // Append the newly created task item to the task list (ul element)
    taskList.appendChild(taskItem);

    // Create a delete button event listener to remove the task from the list
    const deleteBtnTaskList = taskItem.querySelector(".delete");
    deleteBtnTaskList.addEventListener("click", () => {
        taskItem.remove(); // Remove task item from the list
    });

    // Mark the task as completed when the task item is clicked
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}
