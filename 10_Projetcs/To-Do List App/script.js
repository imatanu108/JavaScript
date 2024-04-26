let addButton = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");
let inputField = document.getElementById("input-field");
let addCancelButton = document.getElementById("add-cancel-btn");
let inputContainer = document.getElementById("input-container");
let updateButton = document.getElementById("update-btn");

function toggleInputField() {
    // console.log("Button Toggled!");
    if (inputContainer.style.display === "none") {
        inputContainer.style.display = "block";
        addCancelButton.innerText = "Cancel";
        inputField.focus();
    } else if (inputContainer.style.display !== "none") {
        inputContainer.style.display = "none";
        addCancelButton.innerText = "+Add Task";
    }
}
addCancelButton.addEventListener("click", toggleInputField);

function addNewTask() {
    let newTaskName = inputField.value.trim();
    if (newTaskName !== "") {
        let newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `<span class="task-value">${newTaskName}</span><button id="remove-btn" onclick="removeTask(this)">Remove</button><button id="update-btn" onclick="updateTask(this)">Update</button>`;
        taskList.append(newTaskItem);
        inputField.value = "";
        toggleInputField(); // reset the input-field 
    } else {
        toggleInputField();
        alert("Task name can't be empty!")
    }
}

addButton.addEventListener("click", addNewTask);

function removeTask(button) {
    // console.log(button)
    let parentItem = button.parentElement;
    // console.log(parentItem)
    parentItem.remove();
}

function updateTask(button) {
    inputContainer.style.display = "block";
    let buttonParent = button.parentElement;
    let taskName = button.parentElement.firstElementChild.innerText;
    inputField.value = taskName;
    inputField.focus();
    addButton.innerText = "Update";
    console.log(taskName);

    addButton.addEventListener("click", () => {
        let updatedTaskName = inputField.value.trim();
        if (updatedTaskName !== "") {
            button.parentElement.firstElementChild.innerText = updatedTaskName;
        }
        buttonParent.remove(); // remove the old task and adds the new modefied task
        inputContainer.style.display = "none";
        addButton.innerText = "Add";
    });
}