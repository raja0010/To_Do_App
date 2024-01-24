
function addTask() {
    var taskInput = document.getElementById("taskInput");
     var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);

        li.appendChild(taskText);

        var select = document.createElement("select");
        select.innerHTML = '<option value="pending">Pending</option><option value="completed">Completed</option>';
        li.appendChild(select);

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteBtn);

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = function() {
            var newText = prompt("Edit task:", taskText.nodeValue);
            if (newText !== null) {
                taskText.nodeValue = newText;
            }
        };
        li.appendChild(editBtn);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
