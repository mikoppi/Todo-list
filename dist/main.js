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
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks)
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
/* harmony export */   "showAllTaskList": () => (/* binding */ showAllTaskList),
/* harmony export */   "showTaskList": () => (/* binding */ showTaskList)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM.js */ "./src/projectsDOM.js");





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
    //clearTaskForm();
    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;
    let projectClassNumber=`${index}`;
    console.log(projectClassNumber)
    showAllTaskList(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[projectClassNumber].getTasks());
    const taskContent=document.querySelector('.right-content');
    const taskList=document.querySelector('.task-ul');
    let title=document.querySelector('.content-title');
    title.innerText='All tasks';
    taskContent.prepend(title);
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
            showTaskList(tasksArray);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzQkFBc0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7O1VDaEwvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRztBQUNJOztBQUU3Qyx3REFBZ0I7QUFDaEIsc0RBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZW51RE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3NET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cbiAgXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICBcbiAgICBnZXROYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbiAgXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSlcbiAgICB9XG4gIFxuICAgIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tOYW1lKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVyblxuICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICBcbiAgICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gdGFza05hbWUpXG4gICAgfVxufVxuICAiLCJjbGFzcyBDcmVhdGVUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5TnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZT1kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5TnVtYmVyPXByaW9yaXR5TnVtYmVyO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGU9dGl0bGU7ICAgIFxuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgfVxuICAgIFxuICAgIGdldERlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGU9ZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzazsiLCJpbXBvcnQgbG9hZFRhc2tDb250ZW50LCB7IHNob3dUYXNrTGlzdCB9IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcbmltcG9ydCB7IGxvYWRBbGxUYXNrQ29udGVudCB9IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgeyBjbGVhclRhc2tMaXN0IH0gZnJvbSBcIi4vdGFza3NET01cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgICBjb25zdCBhbGxUYXNrc0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzJyk7XG4gICAgYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUFsbFRhc2tzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBbGxUYXNrcyhlKSB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGZvciAobGV0IGk9MDtpPHByb2plY3RzQXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgICBsb2FkQWxsVGFza0NvbnRlbnQoaSk7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgbG9hZFRhc2tDb250ZW50IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBjbGVhclRhc2tDb250ZW50IH0gZnJvbSBcIi4vdGFza3NET01cIjtcblxuZXhwb3J0IGxldCBwcm9qZWN0c0FycmF5PVtdO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RGb3JtKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKGUpIHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwicHJvamVjdEZvcm1cIiBjbGFzcz1cIlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0SW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiIG1heGxlbmd0aD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdFN1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2plY3RDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICBjb25zdCBzdWJtaXRCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTdWJtaXRCdG4nKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvTGlzdCk7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsQnRuJyk7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgcHJvamVjdEZvcm0uaW5uZXJIVE1MPScnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdChlKSB7XG4gICAgbGV0IHByb2plY3ROYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgICBpZiAocHJvamVjdE5hbWU9PScnKSByZXR1cm47XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgc2hvd1Byb2plY3RMaXN0KCk7XG4gICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXVsJyk7XG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MPScnO1xuICAgIGZvciAobGV0IGk9MDtpPHByb2plY3RzQXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgcHJvamVjdEV4YW1wbGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdEV4YW1wbGUuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgcHJvamVjdEV4YW1wbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVGFza0NvbnRlbnQpLHsgb25jZTogdHJ1ZSB9O1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5pbm5lclRleHQ9cHJvamVjdHNBcnJheVtpXS5nZXROYW1lKCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFeGFtcGxlKTtcblxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dD0nRGVsZXRlJztcbiAgICAgICAgcHJvamVjdEV4YW1wbGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkZWxldGVJbmRleD1kZWxldGVCdXR0b24uY2xhc3NOYW1lO1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoZGVsZXRlSW5kZXgsMSlcbiAgICAgICAgICAgIGNsZWFyVGFza0NvbnRlbnQoKTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0TGlzdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybS5pbm5lckhUTUw9Jyc7ICAgXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld1Byb2plY3Q7XG5cblxuIiwiaW1wb3J0IENyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzRE9NLmpzXCI7XG5cblxuZnVuY3Rpb24gbG9hZFRhc2tDb250ZW50KGUpIHtcbiAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgY2xlYXJUYXNrRm9ybSgpO1xuICAgIGxldCBwcm9qZWN0Q2xhc3NOdW1iZXI9ZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIHNob3dUYXNrTGlzdChwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0VGFza3MoKSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdENsYXNzTnVtYmVyKTtcbiAgICBjb25zdCB0YXNrQ29udGVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGVudCcpO1xuICAgIGxldCB0aXRsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dD1wcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0TmFtZSgpO1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnV0dG9uJyk7XG4gICAgY3JlYXRlVGFza0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIHRhc2tDb250ZW50LnByZXBlbmQodGl0bGUpO1xuXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gKChhcmcpID0+IHtcbiAgICAgICAgc2hvd1Rhc2tGb3JtKGV2ZW50LCBhcmcpO1xuICAgICAgfSkocHJvamVjdENsYXNzTnVtYmVyKSk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxUYXNrQ29udGVudChpbmRleCkge1xuICAgIC8vY2xlYXJUYXNrRm9ybSgpO1xuICAgIGxldCByZW1vdmVkQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ1dHRvbicpO1xuICAgIHJlbW92ZWRCdXR0b24uaGlkZGVuPXRydWU7XG4gICAgbGV0IHByb2plY3RDbGFzc051bWJlcj1gJHtpbmRleH1gO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDbGFzc051bWJlcilcbiAgICBzaG93QWxsVGFza0xpc3QocHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmdldFRhc2tzKCkpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250ZW50Jyk7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQ9J0FsbCB0YXNrcyc7XG4gICAgdGFza0NvbnRlbnQucHJlcGVuZCh0aXRsZSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybShlLHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwidGFza0Zvcm1cIiBjbGFzcz1cIiR7cHJvamVjdENsYXNzTnVtYmVyfVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZVwiIG5hbWU9XCJ0YXNrLWR1ZVwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFza1N1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2tDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgIFxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiAoKGFyZykgPT4ge1xuICAgICAgICBnZXRUYXNrRm9ybVZhbHVlcyhldmVudCwgYXJnKTtcbiAgICAgIH0pKHByb2plY3RDbGFzc051bWJlcikpO1xuXG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcblxuICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGb3JtVmFsdWVzKGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGxldCB0YXNrTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgdGFza2R1ZURhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZHVlJykudmFsdWU7XG5cbiAgICBhZGRUYXNrVG9BcnJheSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyYXkodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKSB7XG4gICAgbGV0IG5ld1Rhc2s9bmV3IENyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSk7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgbGV0IHRhc2tzRnJvbUdpdmVuUHJvamVjdD1wcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0VGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0udGFza3MpO1xuICAgIHNob3dUYXNrTGlzdCh0YXNrc0Zyb21HaXZlblByb2plY3QpXG4gICAgY2xlYXJUYXNrRm9ybSgpO1xufSBcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrTGlzdCh0YXNrc0FycmF5KSB7XG4gICAgY29uc29sZS5sb2coJ2plZScpO1xuICAgIGNvbnN0IHRhc2tMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXVsJyk7XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MPScnO1xuICAgIGZvciAobGV0IGk9MDtpPHRhc2tzQXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgdGFza0V4YW1wbGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrVGl0bGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1RpdGxlUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS50aXRsZX1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQYXJhKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25QYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25QYXJhKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrRGF0ZVBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGF0ZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0uZHVlRGF0ZX1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGF0ZVBhcmEpO1xuICAgICAgICBcbiAgICAgICAgdGFza0V4YW1wbGUuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0V4YW1wbGUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lclRleHQ9J0RlbGV0ZSc7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkZWxldGVJbmRleD1kZWxldGVUYXNrQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LDEpXG4gICAgICAgICAgICBzaG93VGFza0xpc3QodGFza3NBcnJheSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrTGlzdCh0YXNrc0FycmF5KSB7XG4gICAgY29uc29sZS5sb2coJ2plcGEnKTtcbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIC8vdGFza0xpc3QuaW5uZXJIVE1MPScnO1xuICAgIGZvciAobGV0IGk9MDtpPHRhc2tzQXJyYXkubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgdGFza0V4YW1wbGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrVGl0bGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1RpdGxlUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS50aXRsZX1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQYXJhKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25QYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25QYXJhKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0YXNrRGF0ZVBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGF0ZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0uZHVlRGF0ZX1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGF0ZVBhcmEpO1xuICAgICAgICBcbiAgICAgICAgdGFza0V4YW1wbGUuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0V4YW1wbGUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lclRleHQ9J0RlbGV0ZSc7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkZWxldGVJbmRleD1kZWxldGVUYXNrQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LDEpXG4gICAgICAgICAgICBzaG93VGFza0xpc3QodGFza3NBcnJheSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhc2tDb250ZW50KCkge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MPScnO1xuXG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG5cbiAgICBsZXQgcmVtb3ZlZEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idXR0b24nKTtcbiAgICByZW1vdmVkQnV0dG9uLmhpZGRlbj10cnVlO1xuXG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PScnO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUYXNrQ29udGVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgc2hvd0FsbFRhc2tzIH0gZnJvbSBcIi4vbWVudURPTVwiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3QgZnJvbSBcIi4vcHJvamVjdHNET01cIjtcblxuY3JlYXRlTmV3UHJvamVjdCgpO1xuc2hvd0FsbFRhc2tzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9