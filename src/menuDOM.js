import loadTaskContent, { showTaskList } from "./tasksDOM";
import { projectsArray } from "./projectsDOM.js";
import { loadAllTaskContent } from "./tasksDOM";
import { clearTaskList } from "./tasksDOM";

export function showAllTasks() {
    const allTasksButton=document.querySelector('.all-tasks');
    allTasksButton.addEventListener('click', generateAllTasks);
}

function generateAllTasks(e) {
    clearTaskList();
    for (let i=0;i<projectsArray.length;i++) {
        loadAllTaskContent(i);
        
    }
}