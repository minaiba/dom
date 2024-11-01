

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    // if (taskText === "") {
    //     alert("Введите текст!");
    //     return;
    // }


const taskDiv = document.createElement("div");
taskDiv.className = "task";


const taskP = document.createElement("p");
taskP.textContent = taskText;
taskDiv.appendChild(taskP);


const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-7z"/><path fill-rule="evenodd" d="M3.5 1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1H15a.5.5 0 0 1 0 1h-1v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3H1a.5.5 0 0 1 0-1h1V1zM4.118 2 4 2.06V3h8V2.06L11.882 2H4.118z"/></svg>';

deleteBtn.onclick = function () {
    taskDiv.remove();
};
taskDiv.appendChild(deleteBtn);


const taskList = document.getElementById("taskList");
taskList.appendChild(taskDiv);

taskInput.value = " ";  


}












