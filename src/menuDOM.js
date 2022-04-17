import {
  loadAllTaskContent,
  clearTaskList,
  loadTodaysTaskContent,
  loadWeeklyTaskContent,
} from "./tasksDOM";
import { projectsArray } from "./projectsDOM.js";

export function showAllTasks() {
  const allTasksButton = document.querySelector(".all-tasks");
  allTasksButton.addEventListener("click", generateAllTasks);
}

export function generateAllTasks(e) {
  clearTaskList();
  for (let i = 0; i < projectsArray.length; i++) {
    loadAllTaskContent(i);
  }
}

export function showTodaysTasks() {
  const todayTasksButton = document.querySelector(".today-tasks");
  todayTasksButton.addEventListener("click", generateTodayTasks);
}

export function generateTodayTasks(e) {
  clearTaskList();
  for (let i = 0; i < projectsArray.length; i++) {
    loadTodaysTaskContent(i);
  }
}

export function showWeeklyTasks() {
  const weeklyTasksButton = document.querySelector(".weekly-tasks");
  weeklyTasksButton.addEventListener("click", generateWeeklyTasks);
}

export function generateWeeklyTasks(e) {
  clearTaskList();
  for (let i = 0; i < projectsArray.length; i++) {
    loadWeeklyTaskContent(i);
  }
}
