import { showTaskList } from "./tasksDOM";
import { projectsArray } from "./projectsDOM.js";

export function showAllTasks() {
    const allTasksButton=document.querySelector('.all-tasks');
    allTasksButton.addEventListener('click', generateAllTasks);
}

function generateAllTasks(e) {
    for (let i=0;i<projectsArray.length;i++) {
        showTaskList(projectsArray[i].getTasks());
        //console.log(projectsArray);
    }
}