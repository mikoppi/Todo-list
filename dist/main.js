/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getTitle() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getTitle() === taskName);
  }

  addTask(newTask) {
    if (this.tasks.find((task) => task.getTitle() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}


/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CreateTask {
  constructor(title, description, dueDate, priorityNumber) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityNumber = priorityNumber;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDesc(description) {
    this.description = description;
  }

  getDesc() {
    return this.description;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTask);


/***/ }),

/***/ "./src/menuDOM.js":
/*!************************!*\
  !*** ./src/menuDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAllTasks": () => (/* binding */ generateAllTasks),
/* harmony export */   "generateTodayTasks": () => (/* binding */ generateTodayTasks),
/* harmony export */   "generateWeeklyTasks": () => (/* binding */ generateWeeklyTasks),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
/* harmony export */   "showTodaysTasks": () => (/* binding */ showTodaysTasks),
/* harmony export */   "showWeeklyTasks": () => (/* binding */ showWeeklyTasks)
/* harmony export */ });
/* harmony import */ var _tasksDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksDOM */ "./src/tasksDOM.js");
/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsDOM.js */ "./src/projectsDOM.js");



const dropDownButton=document.querySelector('.dropdown');
dropDownButton.addEventListener('click',() => {
    const leftContent=document.getElementsByClassName('left-content');
    if (leftContent[0].style.visibility==='visible') {
        leftContent[0].style.visibility='hidden';
    } else {
        leftContent[0].style.visibility='visible';
    }
})


function showAllTasks() {
  const allTasksButton = document.querySelector(".all-tasks");
  allTasksButton.addEventListener("click", generateAllTasks);
}

function generateAllTasks(e) {
  (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
  for (let i = 0; i < _projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadAllTaskContent)(i);
  }
}

function showTodaysTasks() {
  const todayTasksButton = document.querySelector(".today-tasks");
  todayTasksButton.addEventListener("click", generateTodayTasks);
}

function generateTodayTasks(e) {
  (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
  for (let i = 0; i < _projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadTodaysTaskContent)(i);
  }
}

function showWeeklyTasks() {
  const weeklyTasksButton = document.querySelector(".weekly-tasks");
  weeklyTasksButton.addEventListener("click", generateWeeklyTasks);
}

function generateWeeklyTasks(e) {
  (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
  for (let i = 0; i < _projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadWeeklyTaskContent)(i);
  }
}


/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _tasksDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksDOM */ "./src/tasksDOM.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");



const projectsArray = [];

function createNewProject() {
  const projectButton = document.querySelector(".add-project");
  projectButton.addEventListener("click", showProjectForm);
}

function showProjectForm(e) {
  const projectForm = document.querySelector(".project-form");
  projectForm.innerHTML = `<form id="projectForm" class="" autocomplete="off">
                                <div class="inputField">
                                    <input type="text" id="projectInput" placeholder="Enter Project Name" maxlength="24">
                                    <div class="formButtons">
                                        <input type="button" class="projectSubmitBtn" value="Add">
                                        <input type="button" class="projectCancelBtn" value="Cancel">
                                    </div>
                                </div>
                            </form>`;
  const submitButton = document.querySelector(".projectSubmitBtn");
  submitButton.addEventListener("click", addProjectToList);

  const cancelButton = document.querySelector(".projectCancelBtn");
  cancelButton.addEventListener("click", () => {
    projectForm.innerHTML = "";
  });
}

function addProjectToList(e) {
  const projectName = document.getElementById("projectInput").value;
  if (projectName === "") return;
  projectsArray.push(new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
  console.log(projectsArray);
  showProjectList();
  closeProjectForm();
}

function showProjectList() {
  const projectList = document.querySelector(".projects-ul");
  projectList.innerHTML = "";
  for (let i = 0; i < projectsArray.length; i++) {
    const projectExample = document.createElement("li");
    projectExample.classList.add(i);
    projectExample.addEventListener("click", _tasksDOM__WEBPACK_IMPORTED_MODULE_0__["default"]), { once: true };
    projectExample.innerText = projectsArray[i].getName();
    projectList.appendChild(projectExample);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(i);
    deleteButton.innerText = "Delete";
    projectExample.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      const deleteIndex = deleteButton.className;
      projectsArray.splice(deleteIndex, 1);
      (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskContent)();
      showProjectList();
    });
  }
}

function closeProjectForm() {
  const projectForm = document.querySelector(".project-form");
  projectForm.innerHTML = "";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewProject);


/***/ }),

/***/ "./src/tasksDOM.js":
/*!*************************!*\
  !*** ./src/tasksDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskContent": () => (/* binding */ clearTaskContent),
/* harmony export */   "clearTaskList": () => (/* binding */ clearTaskList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadAllTaskContent": () => (/* binding */ loadAllTaskContent),
/* harmony export */   "loadTodaysTaskContent": () => (/* binding */ loadTodaysTaskContent),
/* harmony export */   "loadWeeklyTaskContent": () => (/* binding */ loadWeeklyTaskContent),
/* harmony export */   "showAllTaskList": () => (/* binding */ showAllTaskList),
/* harmony export */   "showTaskList": () => (/* binding */ showTaskList)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM.js */ "./src/projectsDOM.js");
/* harmony import */ var _menuDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuDOM */ "./src/menuDOM.js");





function loadTaskContent(e) {
  clearTaskList();
  clearTaskForm();
  const projectClassNumber = e.target.className;
  showTaskList(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks());
  console.log(projectClassNumber);
  const taskContent = document.querySelector(".right-content");
  const title = document.querySelector(".content-title");
  title.innerText = _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getName();
  const createTaskButton = document.querySelector(".task-button");
  createTaskButton.removeAttribute("hidden");
  taskContent.prepend(title);

  createTaskButton.addEventListener("click", (event) =>
    ((arg) => {
      showTaskForm(event, arg);
    })(projectClassNumber)
  );
}

function loadAllTaskContent(index) {
  deleteAddTaskButton();
  const projectClassNumber = `${index}`;
  console.log(projectClassNumber);
  showAllTaskList(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks());
  const taskContent = document.querySelector(".right-content");
  const taskList = document.querySelector(".task-ul");
  const title = document.querySelector(".content-title");
  title.innerText = "All tasks";
  taskContent.prepend(title);
}

function loadTodaysTaskContent(index) {
  deleteAddTaskButton();
  const today = new Date().toISOString().slice(0, 10);
  const tasksFromGivenProject = _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[index].getTasks();
  const todayTasks = [];
  for (const task of tasksFromGivenProject) {
    const dueDate = task.getDate();
    if (today === dueDate) {
      todayTasks.push(task);
    }
    showAllTaskList(todayTasks);
  }
}

function loadWeeklyTaskContent(index) {
  deleteAddTaskButton();
  const today = new Date();
  const weeklyTasks = [];
  const weekFromToday = new Date();
  weekFromToday.setDate(weekFromToday.getDate() + 7);
  const tasksFromGivenProject = _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[index].getTasks();
  for (const task of tasksFromGivenProject) {
    const dueDate = task.getDate();
    const convertDueDate = new Date(dueDate);
    if (
      convertDueDate >= today.setHours(0, 0, 0, 0) &&
      convertDueDate <= weekFromToday
    ) {
      weeklyTasks.push(task);
    }
    showAllTaskList(weeklyTasks);
  }
}

function showTaskForm(e, projectClassNumber) {
  const taskForm = document.querySelector(".task-form");
  taskForm.innerHTML = `<form id="taskForm" class="${projectClassNumber}" autocomplete="off">
                                <div class="inputField">
                                    <input type="text" id="taskName" placeholder="Enter task Name" maxlength="24">
                                    <input type="text" id="taskDescription" placeholder="Description" maxlength="50">
                                    <label for="task-due">Due date:</label>
                                    <input type="date" id="task-due" name="task-due" value="">
                                    <div class="formButtons">
                                        <input type="button" class="taskSubmitBtn" value="Add">
                                        <input type="button" class="taskCancelBtn" value="Cancel">
                                    </div>
                                </div>
                            </form>`;

  const submitTaskButton = document.querySelector(".taskSubmitBtn");
  submitTaskButton.addEventListener("click", (event) =>
    ((arg) => {
      getTaskFormValues(event, arg);
    })(projectClassNumber)
  );

  const cancelTaskButton = document.querySelector(".taskCancelBtn");
  cancelTaskButton.addEventListener("click", () => {
    taskForm.innerHTML = "";
  });
}

function getTaskFormValues(e, projectClassNumber) {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskdueDate = document.getElementById("task-due").value;

  addTaskToArray(taskName, taskDescription, taskdueDate, projectClassNumber);
}

function addTaskToArray(title, description, dueDate, projectClassNumber) {
  const newTask = new _createTask__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate);
  _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].addTask(newTask);
  const tasksFromGivenProject = _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks();
  console.log(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].tasks);
  showTaskList(tasksFromGivenProject);
  clearTaskForm();
}

function showTaskList(tasksArray) {
  console.log("jee");
  const taskList = document.querySelector(".task-ul");
  taskList.innerHTML = "";
  for (let i = 0; i < tasksArray.length; i++) {
    const taskExample = document.createElement("li");

    const taskTitlePara = document.createElement("p");
    taskTitlePara.innerText = `${tasksArray[i].title}`;
    taskExample.appendChild(taskTitlePara);

    const taskDescriptionPara = document.createElement("p");
    taskDescriptionPara.innerText = `${tasksArray[i].description}`;
    taskExample.appendChild(taskDescriptionPara);

    const taskDatePara = document.createElement("p");
    taskDatePara.innerText = `${tasksArray[i].dueDate}`;
    taskExample.appendChild(taskDatePara);

    taskExample.classList.add(i);
    taskList.appendChild(taskExample);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add(i);
    deleteTaskButton.innerText = "Delete";
    taskExample.appendChild(deleteTaskButton);
    deleteTaskButton.addEventListener("click", () => {
      const deleteIndex = deleteTaskButton.className;
      tasksArray.splice(deleteIndex, 1);
      showTaskList(tasksArray);
    });
  }
}

function showAllTaskList(tasksArray) {
  console.log("jepa");
  const taskList = document.querySelector(".task-ul");
  // taskList.innerHTML='';
  for (let i = 0; i < tasksArray.length; i++) {
    const taskExample = document.createElement("li");

    const taskTitlePara = document.createElement("p");
    taskTitlePara.innerText = `${tasksArray[i].title}`;
    taskExample.appendChild(taskTitlePara);

    const taskDescriptionPara = document.createElement("p");
    taskDescriptionPara.innerText = `${tasksArray[i].description}`;
    taskExample.appendChild(taskDescriptionPara);

    const taskDatePara = document.createElement("p");
    taskDatePara.innerText = `${tasksArray[i].dueDate}`;
    taskExample.appendChild(taskDatePara);

    taskExample.classList.add(i);
    taskList.appendChild(taskExample);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add(i);
    deleteTaskButton.innerText = "Delete";
    taskExample.appendChild(deleteTaskButton);
    deleteTaskButton.addEventListener("click", () => {
      const deleteIndex = deleteTaskButton.className;
      tasksArray.splice(deleteIndex, 1);
      // showAllTaskList(tasksArray);
      (0,_menuDOM__WEBPACK_IMPORTED_MODULE_3__.generateAllTasks)();
      // generateTodayTasks();
      // generateWeeklyTasks();
    });
  }
}

function clearTaskForm() {
  const taskForm = document.querySelector(".task-form");
  taskForm.innerHTML = "";
}

function clearTaskList() {
  const taskList = document.querySelector(".task-ul");
  taskList.innerHTML = "";
}

function deleteAddTaskButton() {
  const removedButton = document.querySelector(".task-button");
  removedButton.hidden = true;
}

function clearTaskContent() {
  const taskForm = document.querySelector(".task-form");
  taskForm.innerHTML = "";

  const taskList = document.querySelector(".task-ul");
  taskList.innerHTML = "";

  const removedButton = document.querySelector(".task-button");
  removedButton.hidden = true;

  const title = document.querySelector(".content-title");
  title.innerText = "";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskContent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _menuDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuDOM */ "./src/menuDOM.js");
/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM */ "./src/projectsDOM.js");




(0,_projectsDOM__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_menuDOM__WEBPACK_IMPORTED_MODULE_1__.showAllTasks)();
(0,_menuDOM__WEBPACK_IMPORTED_MODULE_1__.showTodaysTasks)();
(0,_menuDOM__WEBPACK_IMPORTED_MODULE_1__.showWeeklyTasks)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDcUM7QUFDOUI7O0FBRTdDLHdEQUFnQjtBQUNoQixzREFBWTtBQUNaLHlEQUFlO0FBQ2YseURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVudURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm47XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cbn1cbiIsImNsYXNzIENyZWF0ZVRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5TnVtYmVyKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHlOdW1iZXIgPSBwcmlvcml0eU51bWJlcjtcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBzZXREZXNjKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0RGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzaztcbiIsImltcG9ydCB7XG4gIGxvYWRBbGxUYXNrQ29udGVudCxcbiAgY2xlYXJUYXNrTGlzdCxcbiAgbG9hZFRvZGF5c1Rhc2tDb250ZW50LFxuICBsb2FkV2Vla2x5VGFza0NvbnRlbnQsXG59IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcblxuY29uc3QgZHJvcERvd25CdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG5kcm9wRG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIGNvbnN0IGxlZnRDb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlZnQtY29udGVudCcpO1xuICAgIGlmIChsZWZ0Q29udGVudFswXS5zdHlsZS52aXNpYmlsaXR5PT09J3Zpc2libGUnKSB7XG4gICAgICAgIGxlZnRDb250ZW50WzBdLnN0eWxlLnZpc2liaWxpdHk9J2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdENvbnRlbnRbMF0uc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSc7XG4gICAgfVxufSlcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuICBjb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tzXCIpO1xuICBhbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2VuZXJhdGVBbGxUYXNrcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUFsbFRhc2tzKGUpIHtcbiAgY2xlYXJUYXNrTGlzdCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsb2FkQWxsVGFza0NvbnRlbnQoaSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2RheXNUYXNrcygpIHtcbiAgY29uc3QgdG9kYXlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktdGFza3NcIik7XG4gIHRvZGF5VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlVG9kYXlUYXNrcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRvZGF5VGFza3MoZSkge1xuICBjbGVhclRhc2tMaXN0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxvYWRUb2RheXNUYXNrQ29udGVudChpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1dlZWtseVRhc2tzKCkge1xuICBjb25zdCB3ZWVrbHlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla2x5LXRhc2tzXCIpO1xuICB3ZWVrbHlUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2VuZXJhdGVXZWVrbHlUYXNrcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdlZWtseVRhc2tzKGUpIHtcbiAgY2xlYXJUYXNrTGlzdCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsb2FkV2Vla2x5VGFza0NvbnRlbnQoaSk7XG4gIH1cbn1cbiIsImltcG9ydCBsb2FkVGFza0NvbnRlbnQsIHsgY2xlYXJUYXNrQ29udGVudCB9IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oZSkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJwcm9qZWN0Rm9ybVwiIGNsYXNzPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3RJbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9qZWN0U3VibWl0QnRuXCIgdmFsdWU9XCJBZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdENhbmNlbEJ0blwiIHZhbHVlPVwiQ2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPmA7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFN1Ym1pdEJ0blwiKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0VG9MaXN0KTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDYW5jZWxCdG5cIik7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtLmlubmVySFRNTCA9IFwiXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KGUpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gIHByb2plY3RzQXJyYXkucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgc2hvd1Byb2plY3RMaXN0KCk7XG4gIGNsb3NlUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtdWxcIik7XG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RFeGFtcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3RFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgcHJvamVjdEV4YW1wbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRUYXNrQ29udGVudCksIHsgb25jZTogdHJ1ZSB9O1xuICAgIHByb2plY3RFeGFtcGxlLmlubmVyVGV4dCA9IHByb2plY3RzQXJyYXlbaV0uZ2V0TmFtZSgpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFeGFtcGxlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gICAgcHJvamVjdEV4YW1wbGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gZGVsZXRlQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcbiAgICAgIGNsZWFyVGFza0NvbnRlbnQoKTtcbiAgICAgIHNob3dQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gIHByb2plY3RGb3JtLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld1Byb2plY3Q7XG4iLCJpbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQWxsVGFza3MgfSBmcm9tIFwiLi9tZW51RE9NXCI7XG5cbmZ1bmN0aW9uIGxvYWRUYXNrQ29udGVudChlKSB7XG4gIGNsZWFyVGFza0xpc3QoKTtcbiAgY2xlYXJUYXNrRm9ybSgpO1xuICBjb25zdCBwcm9qZWN0Q2xhc3NOdW1iZXIgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gIHNob3dUYXNrTGlzdChwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0VGFza3MoKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RDbGFzc051bWJlcik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1jb250ZW50XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmdldE5hbWUoKTtcbiAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idXR0b25cIik7XG4gIGNyZWF0ZVRhc2tCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICB0YXNrQ29udGVudC5wcmVwZW5kKHRpdGxlKTtcblxuICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+XG4gICAgKChhcmcpID0+IHtcbiAgICAgIHNob3dUYXNrRm9ybShldmVudCwgYXJnKTtcbiAgICB9KShwcm9qZWN0Q2xhc3NOdW1iZXIpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsVGFza0NvbnRlbnQoaW5kZXgpIHtcbiAgZGVsZXRlQWRkVGFza0J1dHRvbigpO1xuICBjb25zdCBwcm9qZWN0Q2xhc3NOdW1iZXIgPSBgJHtpbmRleH1gO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0Q2xhc3NOdW1iZXIpO1xuICBzaG93QWxsVGFza0xpc3QocHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmdldFRhc2tzKCkpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtY29udGVudFwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIkFsbCB0YXNrc1wiO1xuICB0YXNrQ29udGVudC5wcmVwZW5kKHRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2RheXNUYXNrQ29udGVudChpbmRleCkge1xuICBkZWxldGVBZGRUYXNrQnV0dG9uKCk7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgY29uc3QgdGFza3NGcm9tR2l2ZW5Qcm9qZWN0ID0gcHJvamVjdHNBcnJheVtpbmRleF0uZ2V0VGFza3MoKTtcbiAgY29uc3QgdG9kYXlUYXNrcyA9IFtdO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3NGcm9tR2l2ZW5Qcm9qZWN0KSB7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgIGlmICh0b2RheSA9PT0gZHVlRGF0ZSkge1xuICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBzaG93QWxsVGFza0xpc3QodG9kYXlUYXNrcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXZWVrbHlUYXNrQ29udGVudChpbmRleCkge1xuICBkZWxldGVBZGRUYXNrQnV0dG9uKCk7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgd2Vla2x5VGFza3MgPSBbXTtcbiAgY29uc3Qgd2Vla0Zyb21Ub2RheSA9IG5ldyBEYXRlKCk7XG4gIHdlZWtGcm9tVG9kYXkuc2V0RGF0ZSh3ZWVrRnJvbVRvZGF5LmdldERhdGUoKSArIDcpO1xuICBjb25zdCB0YXNrc0Zyb21HaXZlblByb2plY3QgPSBwcm9qZWN0c0FycmF5W2luZGV4XS5nZXRUYXNrcygpO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3NGcm9tR2l2ZW5Qcm9qZWN0KSB7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGNvbnZlcnREdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgaWYgKFxuICAgICAgY29udmVydER1ZURhdGUgPj0gdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCkgJiZcbiAgICAgIGNvbnZlcnREdWVEYXRlIDw9IHdlZWtGcm9tVG9kYXlcbiAgICApIHtcbiAgICAgIHdlZWtseVRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIHNob3dBbGxUYXNrTGlzdCh3ZWVrbHlUYXNrcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJ0YXNrRm9ybVwiIGNsYXNzPVwiJHtwcm9qZWN0Q2xhc3NOdW1iZXJ9XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIE5hbWVcIiBtYXhsZW5ndGg9XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgbWF4bGVuZ3RoPVwiNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWR1ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRhc2stZHVlXCIgbmFtZT1cInRhc2stZHVlXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0YXNrU3VibWl0QnRuXCIgdmFsdWU9XCJBZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFza0NhbmNlbEJ0blwiIHZhbHVlPVwiQ2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPmA7XG5cbiAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1N1Ym1pdEJ0blwiKTtcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PlxuICAgICgoYXJnKSA9PiB7XG4gICAgICBnZXRUYXNrRm9ybVZhbHVlcyhldmVudCwgYXJnKTtcbiAgICB9KShwcm9qZWN0Q2xhc3NOdW1iZXIpXG4gICk7XG5cbiAgY29uc3QgY2FuY2VsVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NhbmNlbEJ0blwiKTtcbiAgY2FuY2VsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9IFwiXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrRm9ybVZhbHVlcyhlLCBwcm9qZWN0Q2xhc3NOdW1iZXIpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgdGFza2R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlXCIpLnZhbHVlO1xuXG4gIGFkZFRhc2tUb0FycmF5KHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tkdWVEYXRlLCBwcm9qZWN0Q2xhc3NOdW1iZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9BcnJheSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICBjb25zdCBuZXdUYXNrID0gbmV3IENyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcbiAgcHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmFkZFRhc2sobmV3VGFzayk7XG4gIGNvbnN0IHRhc2tzRnJvbUdpdmVuUHJvamVjdCA9IHByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXRUYXNrcygpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0udGFza3MpO1xuICBzaG93VGFza0xpc3QodGFza3NGcm9tR2l2ZW5Qcm9qZWN0KTtcbiAgY2xlYXJUYXNrRm9ybSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tMaXN0KHRhc2tzQXJyYXkpIHtcbiAgY29uc29sZS5sb2coXCJqZWVcIik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXVsXCIpO1xuICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRXhhbXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrVGl0bGVQYXJhLmlubmVyVGV4dCA9IGAke3Rhc2tzQXJyYXlbaV0udGl0bGV9YDtcbiAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQYXJhKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb25QYXJhLmlubmVyVGV4dCA9IGAke3Rhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb259YDtcbiAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25QYXJhKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEYXRlUGFyYS5pbm5lclRleHQgPSBgJHt0YXNrc0FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGF0ZVBhcmEpO1xuXG4gICAgdGFza0V4YW1wbGUuY2xhc3NMaXN0LmFkZChpKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRXhhbXBsZSk7XG5cbiAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gZGVsZXRlVGFza0J1dHRvbi5jbGFzc05hbWU7XG4gICAgICB0YXNrc0FycmF5LnNwbGljZShkZWxldGVJbmRleCwgMSk7XG4gICAgICBzaG93VGFza0xpc3QodGFza3NBcnJheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrTGlzdCh0YXNrc0FycmF5KSB7XG4gIGNvbnNvbGUubG9nKFwiamVwYVwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdWxcIik7XG4gIC8vIHRhc2tMaXN0LmlubmVySFRNTD0nJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0V4YW1wbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1RpdGxlUGFyYS5pbm5lclRleHQgPSBgJHt0YXNrc0FycmF5W2ldLnRpdGxlfWA7XG4gICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlUGFyYSk7XG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uUGFyYS5pbm5lclRleHQgPSBgJHt0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uUGFyYSk7XG5cbiAgICBjb25zdCB0YXNrRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZVBhcmEuaW5uZXJUZXh0ID0gYCR7dGFza3NBcnJheVtpXS5kdWVEYXRlfWA7XG4gICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcblxuICAgIHRhc2tFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0V4YW1wbGUpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKGkpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVJbmRleCA9IGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NOYW1lO1xuICAgICAgdGFza3NBcnJheS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICAgICAgLy8gc2hvd0FsbFRhc2tMaXN0KHRhc2tzQXJyYXkpO1xuICAgICAgZ2VuZXJhdGVBbGxUYXNrcygpO1xuICAgICAgLy8gZ2VuZXJhdGVUb2RheVRhc2tzKCk7XG4gICAgICAvLyBnZW5lcmF0ZVdlZWtseVRhc2tzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgdGFza0Zvcm0uaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza0xpc3QoKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXVsXCIpO1xuICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBkZWxldGVBZGRUYXNrQnV0dG9uKCkge1xuICBjb25zdCByZW1vdmVkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ1dHRvblwiKTtcbiAgcmVtb3ZlZEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXNrQ29udGVudCgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgdGFza0Zvcm0uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay11bFwiKTtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCByZW1vdmVkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ1dHRvblwiKTtcbiAgcmVtb3ZlZEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGFza0NvbnRlbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IHNob3dBbGxUYXNrcywgc2hvd1RvZGF5c1Rhc2tzLCBzaG93V2Vla2x5VGFza3MgfSBmcm9tIFwiLi9tZW51RE9NXCI7XG5pbXBvcnQgY3JlYXRlTmV3UHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c0RPTVwiO1xuXG5jcmVhdGVOZXdQcm9qZWN0KCk7XG5zaG93QWxsVGFza3MoKTtcbnNob3dUb2RheXNUYXNrcygpO1xuc2hvd1dlZWtseVRhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=