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
      this.name = name
      this.tasks = []
    }
  
    setName(name) {
      this.name = name
    }
  
    getName() {
      return this.name
    }
  
    setTasks(tasks) {
      this.tasks = tasks
    }
  
    getTasks() {
      return this.tasks
    }
  
    getTask(taskName) {
      return this.tasks.find((task) => task.getTitle() === taskName)
    }
  
    contains(taskName) {
      return this.tasks.some((task) => task.getTitle() === taskName)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.name)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(taskName) {
      this.tasks = this.tasks.filter((task) => task.name !== taskName)
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
    constructor(title,description,dueDate,priorityNumber) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priorityNumber=priorityNumber;
    }

    setTitle(title) {
        this.title=title;    
    }

    getTitle() {
        return this.title;
    }

    setDesc(description) {
        this.description=description;
    }
    
    getDesc() {
        return this.description;
    }

    setDate(dueDate) {
        this.dueDate=dueDate;
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








function showAllTasks() {
    const allTasksButton=document.querySelector('.all-tasks');
    allTasksButton.addEventListener('click', generateAllTasks);
}

function generateAllTasks(e) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
    for (let i=0;i<_projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length;i++) {
        (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadAllTaskContent)(i);
        
    }
}

function showTodaysTasks() {
    const todayTasksButton=document.querySelector('.today-tasks');
    todayTasksButton.addEventListener('click', generateTodayTasks);
}

function generateTodayTasks(e) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
    for (let i=0;i<_projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length;i++) {
        (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadTodaysTaskContent)(i)   
    }
}

function showWeeklyTasks() {
    const weeklyTasksButton=document.querySelector('.weekly-tasks');
    weeklyTasksButton.addEventListener('click', generateWeeklyTasks);
}

function generateWeeklyTasks(e) {
    (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskList)();
    for (let i=0;i<_projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length;i++) {
        (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.loadWeeklyTaskContent)(i)
        
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




let projectsArray=[];

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
  const submitButton=document.querySelector('.projectSubmitBtn');
  submitButton.addEventListener('click', addProjectToList);

  const cancelButton=document.querySelector('.projectCancelBtn');
  cancelButton.addEventListener('click',() => {
      projectForm.innerHTML='';
  });
}

function addProjectToList(e) {
    let projectName=document.getElementById('projectInput').value;
    if (projectName=='') return;
    projectsArray.push(new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
    console.log(projectsArray);
    showProjectList();
    closeProjectForm();
}

function showProjectList() {
    const projectList=document.querySelector('.projects-ul');
    projectList.innerHTML='';
    for (let i=0;i<projectsArray.length;i++) {
        let projectExample=document.createElement('li');
        projectExample.classList.add(i);
        projectExample.addEventListener('click', _tasksDOM__WEBPACK_IMPORTED_MODULE_0__["default"]),{ once: true };
        projectExample.innerText=projectsArray[i].getName();
        projectList.appendChild(projectExample);

        let deleteButton=document.createElement('button');
        deleteButton.classList.add(i);
        deleteButton.innerText='Delete';
        projectExample.appendChild(deleteButton);
        deleteButton.addEventListener('click',function() {
            let deleteIndex=deleteButton.className;
            projectsArray.splice(deleteIndex,1)
            ;(0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.clearTaskContent)();
            showProjectList();
        });
    }
}

function closeProjectForm() {
    const projectForm = document.querySelector(".project-form");
    projectForm.innerHTML='';   
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
    let projectClassNumber=e.target.className;
    showTaskList(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks());
    console.log(projectClassNumber);
    const taskContent=document.querySelector('.right-content');
    let title=document.querySelector('.content-title');
    title.innerText=_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getName();
    const createTaskButton=document.querySelector('.task-button');
    createTaskButton.removeAttribute('hidden');
    taskContent.prepend(title);

    createTaskButton.addEventListener('click', (event) => ((arg) => {
        showTaskForm(event, arg);
      })(projectClassNumber));

}

function loadAllTaskContent(index) {
    deleteAddTaskButton()
    let projectClassNumber=`${index}`;
    console.log(projectClassNumber)
    showAllTaskList(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks());
    const taskContent=document.querySelector('.right-content');
    const taskList=document.querySelector('.task-ul');
    let title=document.querySelector('.content-title');
    title.innerText='All tasks';
    taskContent.prepend(title);
}

function loadTodaysTaskContent(index) {
    deleteAddTaskButton()
    let today = new Date().toISOString().slice(0, 10);
    let tasksFromGivenProject=_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[index].getTasks();
    let todayTasks=[];
    for (let task of tasksFromGivenProject) {
        let dueDate=task.getDate();
        if (today===dueDate) {
            todayTasks.push(task)
        }
    showAllTaskList(todayTasks);
    }
}

function loadWeeklyTaskContent(index) {
    deleteAddTaskButton();
    let today = new Date();
    let weeklyTasks=[];
    const weekFromToday = new Date();
    weekFromToday.setDate(weekFromToday.getDate() + 7);
    let tasksFromGivenProject=_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[index].getTasks();
    for (let task of tasksFromGivenProject) {
        let dueDate=task.getDate();
        let convertDueDate=new Date(dueDate);
        if (convertDueDate >= today.setHours(0,0,0,0) && convertDueDate <= weekFromToday) {
            weeklyTasks.push(task)
      }
      showAllTaskList(weeklyTasks)
    }

}

function showTaskForm(e,projectClassNumber) {
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
    
    const submitTaskButton=document.querySelector('.taskSubmitBtn');
    submitTaskButton.addEventListener('click', (event) => ((arg) => {
        getTaskFormValues(event, arg);
      })(projectClassNumber));

    const cancelTaskButton=document.querySelector('.taskCancelBtn');
    cancelTaskButton.addEventListener('click',() => {
      taskForm.innerHTML='';

  });
                          
}

function getTaskFormValues(e, projectClassNumber) {
    let taskName=document.getElementById('taskName').value;
    let taskDescription=document.getElementById('taskDescription').value;
    let taskdueDate=document.getElementById('task-due').value;

    addTaskToArray(taskName, taskDescription, taskdueDate, projectClassNumber);
}

function addTaskToArray(title,description,dueDate, projectClassNumber) {
    let newTask=new _createTask__WEBPACK_IMPORTED_MODULE_0__["default"](title,description,dueDate);
    _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].addTask(newTask);
    let tasksFromGivenProject=_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks();
    console.log(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].tasks);
    showTaskList(tasksFromGivenProject)
    clearTaskForm();
} 

function showTaskList(tasksArray) {
    console.log('jee');
    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';
    for (let i=0;i<tasksArray.length;i++) {
        let taskExample=document.createElement('li');
        
        let taskTitlePara=document.createElement('p');
        taskTitlePara.innerText=`${tasksArray[i].title}`;
        taskExample.appendChild(taskTitlePara);
        
        let taskDescriptionPara=document.createElement('p');
        taskDescriptionPara.innerText=`${tasksArray[i].description}`;
        taskExample.appendChild(taskDescriptionPara);
        
        let taskDatePara=document.createElement('p');
        taskDatePara.innerText=`${tasksArray[i].dueDate}`;
        taskExample.appendChild(taskDatePara);
        
        taskExample.classList.add(i);
        taskList.appendChild(taskExample);
        
        let deleteTaskButton=document.createElement('button');
        deleteTaskButton.classList.add(i);
        deleteTaskButton.innerText='Delete';
        taskExample.appendChild(deleteTaskButton);
        deleteTaskButton.addEventListener('click',function() {
            let deleteIndex=deleteTaskButton.className;
            tasksArray.splice(deleteIndex,1)
            showTaskList(tasksArray);
        });
    }
}

function showAllTaskList(tasksArray) {
    console.log('jepa');
    const taskList=document.querySelector('.task-ul');
    //taskList.innerHTML='';
    for (let i=0;i<tasksArray.length;i++) {
        let taskExample=document.createElement('li');
        
        let taskTitlePara=document.createElement('p');
        taskTitlePara.innerText=`${tasksArray[i].title}`;
        taskExample.appendChild(taskTitlePara);
        
        let taskDescriptionPara=document.createElement('p');
        taskDescriptionPara.innerText=`${tasksArray[i].description}`;
        taskExample.appendChild(taskDescriptionPara);
        
        let taskDatePara=document.createElement('p');
        taskDatePara.innerText=`${tasksArray[i].dueDate}`;
        taskExample.appendChild(taskDatePara);
        
        taskExample.classList.add(i);
        taskList.appendChild(taskExample);
        
        let deleteTaskButton=document.createElement('button');
        deleteTaskButton.classList.add(i);
        deleteTaskButton.innerText='Delete';
        taskExample.appendChild(deleteTaskButton);
        deleteTaskButton.addEventListener('click',function() {
            let deleteIndex=deleteTaskButton.className;
            tasksArray.splice(deleteIndex,1)
            //showAllTaskList(tasksArray);
            ;(0,_menuDOM__WEBPACK_IMPORTED_MODULE_3__.generateAllTasks)();
            //generateTodayTasks();
            //generateWeeklyTasks();
        });
    }
}



function clearTaskForm() {
    const taskForm = document.querySelector(".task-form");
    taskForm.innerHTML='';
}

function clearTaskList() {
    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';
}

function deleteAddTaskButton() {

    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;
}

function clearTaskContent() {
    const taskForm = document.querySelector(".task-form");
    taskForm.innerHTML='';

    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';

    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;

    let title=document.querySelector('.content-title');
    title.innerText='';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDcUM7QUFDOUI7O0FBRTdDLHdEQUFnQjtBQUNoQixzREFBWTtBQUNaLHlEQUFlO0FBQ2YseURBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZW51RE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3NET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cbiAgXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICBcbiAgICBnZXROYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbiAgXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSlcbiAgICB9XG4gIFxuICAgIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tOYW1lKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVyblxuICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICBcbiAgICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpXG4gICAgfVxufVxuICAiLCJjbGFzcyBDcmVhdGVUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5TnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZT1kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5TnVtYmVyPXByaW9yaXR5TnVtYmVyO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7ICAgIFxuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgfVxuICAgIFxuICAgIGdldERlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGU9ZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzazsiLCJpbXBvcnQgbG9hZFRhc2tDb250ZW50LCB7IHNob3dBbGxUYXNrTGlzdCwgc2hvd1Rhc2tMaXN0IH0gZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0c0RPTS5qc1wiO1xuaW1wb3J0IHsgbG9hZEFsbFRhc2tDb250ZW50IH0gZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCB7IGNsZWFyVGFza0xpc3QgfSBmcm9tIFwiLi90YXNrc0RPTVwiO1xuaW1wb3J0IHsgbG9hZFRvZGF5c1Rhc2tDb250ZW50IH0gZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCB7IGxvYWRXZWVrbHlUYXNrQ29udGVudCB9IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgeyB0b2RheVRhc2tzIH0gZnJvbSBcIi4vdGFza3NET01cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgICBjb25zdCBhbGxUYXNrc0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzJyk7XG4gICAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUFsbFRhc2tzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQWxsVGFza3MoZSkge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBmb3IgKGxldCBpPTA7aTxwcm9qZWN0c0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgbG9hZEFsbFRhc2tDb250ZW50KGkpO1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VG9kYXlzVGFza3MoKSB7XG4gICAgY29uc3QgdG9kYXlUYXNrc0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktdGFza3MnKTtcbiAgICB0b2RheVRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVUb2RheVRhc2tzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kYXlUYXNrcyhlKSB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGZvciAobGV0IGk9MDtpPHByb2plY3RzQXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgICBsb2FkVG9kYXlzVGFza0NvbnRlbnQoaSkgICBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93V2Vla2x5VGFza3MoKSB7XG4gICAgY29uc3Qgd2Vla2x5VGFza3NCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtseS10YXNrcycpO1xuICAgIHdlZWtseVRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVXZWVrbHlUYXNrcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdlZWtseVRhc2tzKGUpIHtcbiAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgZm9yIChsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxvYWRXZWVrbHlUYXNrQ29udGVudChpKVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IGxvYWRUYXNrQ29udGVudCBmcm9tIFwiLi90YXNrc0RPTVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgY2xlYXJUYXNrQ29udGVudCB9IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHNBcnJheT1bXTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybShlKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gIHByb2plY3RGb3JtLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cInByb2plY3RGb3JtXCIgY2xhc3M9XCJcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdElucHV0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQcm9qZWN0IE5hbWVcIiBtYXhsZW5ndGg9XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1CdXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2plY3RTdWJtaXRCdG5cIiB2YWx1ZT1cIkFkZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9qZWN0Q2FuY2VsQnRuXCIgdmFsdWU9XCJDYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+YDtcbiAgY29uc3Qgc3VibWl0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U3VibWl0QnRuJyk7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb0xpc3QpO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENhbmNlbEJ0bicpO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgIHByb2plY3RGb3JtLmlubmVySFRNTD0nJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpc3QoZSkge1xuICAgIGxldCBwcm9qZWN0TmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lPT0nJykgcmV0dXJuO1xuICAgIHByb2plY3RzQXJyYXkucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgIHNob3dQcm9qZWN0TGlzdCgpO1xuICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy11bCcpO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTD0nJztcbiAgICBmb3IgKGxldCBpPTA7aTxwcm9qZWN0c0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RFeGFtcGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRhc2tDb250ZW50KSx7IG9uY2U6IHRydWUgfTtcbiAgICAgICAgcHJvamVjdEV4YW1wbGUuaW5uZXJUZXh0PXByb2plY3RzQXJyYXlbaV0uZ2V0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RXhhbXBsZSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQ9J0RlbGV0ZSc7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LDEpXG4gICAgICAgICAgICBjbGVhclRhc2tDb250ZW50KCk7XG4gICAgICAgICAgICBzaG93UHJvamVjdExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uaW5uZXJIVE1MPScnOyAgIFxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXdQcm9qZWN0O1xuXG5cbiIsImltcG9ydCBDcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0c0RPTS5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBbGxUYXNrcyB9IGZyb20gXCIuL21lbnVET01cIjtcblxuXG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQoZSkge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBjbGVhclRhc2tGb3JtKCk7XG4gICAgbGV0IHByb2plY3RDbGFzc051bWJlcj1lLnRhcmdldC5jbGFzc05hbWU7XG4gICAgc2hvd1Rhc2tMaXN0KHByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXRUYXNrcygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q2xhc3NOdW1iZXIpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PXByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXROYW1lKCk7XG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idXR0b24nKTtcbiAgICBjcmVhdGVUYXNrQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgdGFza0NvbnRlbnQucHJlcGVuZCh0aXRsZSk7XG5cbiAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiAoKGFyZykgPT4ge1xuICAgICAgICBzaG93VGFza0Zvcm0oZXZlbnQsIGFyZyk7XG4gICAgICB9KShwcm9qZWN0Q2xhc3NOdW1iZXIpKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbFRhc2tDb250ZW50KGluZGV4KSB7XG4gICAgZGVsZXRlQWRkVGFza0J1dHRvbigpXG4gICAgbGV0IHByb2plY3RDbGFzc051bWJlcj1gJHtpbmRleH1gO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDbGFzc051bWJlcilcbiAgICBzaG93QWxsVGFza0xpc3QocHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmdldFRhc2tzKCkpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250ZW50Jyk7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQ9J0FsbCB0YXNrcyc7XG4gICAgdGFza0NvbnRlbnQucHJlcGVuZCh0aXRsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9kYXlzVGFza0NvbnRlbnQoaW5kZXgpIHtcbiAgICBkZWxldGVBZGRUYXNrQnV0dG9uKClcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGxldCB0YXNrc0Zyb21HaXZlblByb2plY3Q9cHJvamVjdHNBcnJheVtpbmRleF0uZ2V0VGFza3MoKTtcbiAgICBsZXQgdG9kYXlUYXNrcz1bXTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzRnJvbUdpdmVuUHJvamVjdCkge1xuICAgICAgICBsZXQgZHVlRGF0ZT10YXNrLmdldERhdGUoKTtcbiAgICAgICAgaWYgKHRvZGF5PT09ZHVlRGF0ZSkge1xuICAgICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spXG4gICAgICAgIH1cbiAgICBzaG93QWxsVGFza0xpc3QodG9kYXlUYXNrcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdlZWtseVRhc2tDb250ZW50KGluZGV4KSB7XG4gICAgZGVsZXRlQWRkVGFza0J1dHRvbigpO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHdlZWtseVRhc2tzPVtdO1xuICAgIGNvbnN0IHdlZWtGcm9tVG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHdlZWtGcm9tVG9kYXkuc2V0RGF0ZSh3ZWVrRnJvbVRvZGF5LmdldERhdGUoKSArIDcpO1xuICAgIGxldCB0YXNrc0Zyb21HaXZlblByb2plY3Q9cHJvamVjdHNBcnJheVtpbmRleF0uZ2V0VGFza3MoKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzRnJvbUdpdmVuUHJvamVjdCkge1xuICAgICAgICBsZXQgZHVlRGF0ZT10YXNrLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGNvbnZlcnREdWVEYXRlPW5ldyBEYXRlKGR1ZURhdGUpO1xuICAgICAgICBpZiAoY29udmVydER1ZURhdGUgPj0gdG9kYXkuc2V0SG91cnMoMCwwLDAsMCkgJiYgY29udmVydER1ZURhdGUgPD0gd2Vla0Zyb21Ub2RheSkge1xuICAgICAgICAgICAgd2Vla2x5VGFza3MucHVzaCh0YXNrKVxuICAgICAgfVxuICAgICAgc2hvd0FsbFRhc2tMaXN0KHdlZWtseVRhc2tzKVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oZSxwcm9qZWN0Q2xhc3NOdW1iZXIpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cInRhc2tGb3JtXCIgY2xhc3M9XCIke3Byb2plY3RDbGFzc051bWJlcn1cIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza05hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgTmFtZVwiIG1heGxlbmd0aD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBtYXhsZW5ndGg9XCI1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZHVlXCI+RHVlIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFzay1kdWVcIiBuYW1lPVwidGFzay1kdWVcIiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1CdXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2tTdWJtaXRCdG5cIiB2YWx1ZT1cIkFkZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0YXNrQ2FuY2VsQnRuXCIgdmFsdWU9XCJDYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+YDtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrU3VibWl0QnRuJyk7XG4gICAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gKChhcmcpID0+IHtcbiAgICAgICAgZ2V0VGFza0Zvcm1WYWx1ZXMoZXZlbnQsIGFyZyk7XG4gICAgICB9KShwcm9qZWN0Q2xhc3NOdW1iZXIpKTtcblxuICAgIGNvbnN0IGNhbmNlbFRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICB0YXNrRm9ybS5pbm5lckhUTUw9Jyc7XG5cbiAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRm9ybVZhbHVlcyhlLCBwcm9qZWN0Q2xhc3NOdW1iZXIpIHtcbiAgICBsZXQgdGFza05hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IHRhc2tkdWVEYXRlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWR1ZScpLnZhbHVlO1xuXG4gICAgYWRkVGFza1RvQXJyYXkodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza2R1ZURhdGUsIHByb2plY3RDbGFzc051bWJlcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0FycmF5KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGxldCBuZXdUYXNrPW5ldyBDcmVhdGVUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpO1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIGxldCB0YXNrc0Zyb21HaXZlblByb2plY3Q9cHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmdldFRhc2tzKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLnRhc2tzKTtcbiAgICBzaG93VGFza0xpc3QodGFza3NGcm9tR2l2ZW5Qcm9qZWN0KVxuICAgIGNsZWFyVGFza0Zvcm0oKTtcbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza0xpc3QodGFza3NBcnJheSkge1xuICAgIGNvbnNvbGUubG9nKCdqZWUnKTtcbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTD0nJztcbiAgICBmb3IgKGxldCBpPTA7aTx0YXNrc0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IHRhc2tFeGFtcGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza1RpdGxlUGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tUaXRsZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0udGl0bGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlUGFyYSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uUGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvblBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uUGFyYSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza0RhdGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0RhdGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcbiAgICAgICAgXG4gICAgICAgIHRhc2tFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFeGFtcGxlKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWxldGVUYXNrQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlVGFza0J1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgc2hvd1Rhc2tMaXN0KHRhc2tzQXJyYXkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsVGFza0xpc3QodGFza3NBcnJheSkge1xuICAgIGNvbnNvbGUubG9nKCdqZXBhJyk7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICAvL3Rhc2tMaXN0LmlubmVySFRNTD0nJztcbiAgICBmb3IgKGxldCBpPTA7aTx0YXNrc0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IHRhc2tFeGFtcGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza1RpdGxlUGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tUaXRsZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0udGl0bGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlUGFyYSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uUGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvblBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uUGFyYSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza0RhdGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0RhdGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcbiAgICAgICAgXG4gICAgICAgIHRhc2tFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFeGFtcGxlKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWxldGVUYXNrQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlVGFza0J1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgLy9zaG93QWxsVGFza0xpc3QodGFza3NBcnJheSk7XG4gICAgICAgICAgICBnZW5lcmF0ZUFsbFRhc2tzKCk7XG4gICAgICAgICAgICAvL2dlbmVyYXRlVG9kYXlUYXNrcygpO1xuICAgICAgICAgICAgLy9nZW5lcmF0ZVdlZWtseVRhc2tzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUw9Jyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhc2tMaXN0KCkge1xuICAgIGNvbnN0IHRhc2tMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVsJyk7XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MPScnO1xufVxuXG5mdW5jdGlvbiBkZWxldGVBZGRUYXNrQnV0dG9uKCkge1xuXG4gICAgbGV0IHJlbW92ZWRCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnV0dG9uJyk7XG4gICAgcmVtb3ZlZEJ1dHRvbi5oaWRkZW49dHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza0NvbnRlbnQoKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUw9Jyc7XG5cbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTD0nJztcblxuICAgIGxldCByZW1vdmVkQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ1dHRvbicpO1xuICAgIHJlbW92ZWRCdXR0b24uaGlkZGVuPXRydWU7XG5cbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQ9Jyc7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRhc2tDb250ZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyBzaG93QWxsVGFza3MsIHNob3dUb2RheXNUYXNrcywgc2hvd1dlZWtseVRhc2tzIH0gZnJvbSBcIi4vbWVudURPTVwiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3QgZnJvbSBcIi4vcHJvamVjdHNET01cIjtcblxuY3JlYXRlTmV3UHJvamVjdCgpO1xuc2hvd0FsbFRhc2tzKCk7XG5zaG93VG9kYXlzVGFza3MoKTtcbnNob3dXZWVrbHlUYXNrcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==