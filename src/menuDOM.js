import loadTaskContent, { showTaskList } from "./tasksDOM";
import { projectsArray } from "./projectsDOM.js";
import { loadAllTaskContent } from "./tasksDOM";
import { clearTaskList } from "./tasksDOM";
import { loadTodaysTaskContent } from "./tasksDOM";
import { loadWeeklyTaskContent } from "./tasksDOM";

export function showAllTasks() {
    const allTasksButton=document.querySelector('.all-tasks');
    allTasksButton.addEventListener('click', generateAllTasks);
}

export function generateAllTasks(e) {
    clearTaskList();
    for (let i=0;i<projectsArray.length;i++) {
        loadAllTaskContent(i);
        
    }
}

export function showTodaysTasks() {
    const todayTasksButton=document.querySelector('.today-tasks');
    todayTasksButton.addEventListener('click', generateTodayTasks);
}

export function generateTodayTasks(e) {
    clearTaskList();
    for (let i=0;i<projectsArray.length;i++) {
        loadTodaysTaskContent(i)
        
    }
}

export function showWeeklyTasks() {
    const weeklyTasksButton=document.querySelector('.weekly-tasks');
    weeklyTasksButton.addEventListener('click', generateWeeklyTasks);
}

export function generateWeeklyTasks(e) {
    clearTaskList();
    for (let i=0;i<projectsArray.length;i++) {
        loadWeeklyTaskContent(i)
        
    }
}