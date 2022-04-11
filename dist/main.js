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
    for (let i=0;i<_projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length;i++) {
        (0,_tasksDOM__WEBPACK_IMPORTED_MODULE_0__.showTaskList)(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].getTasks());
        //console.log(projectsArray);
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
        projectExample.addEventListener('click', _tasksDOM__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
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
    //createTaskButton.classList.add(`task-button-${projectClassNumber}`);
    //createTaskButton.innerText='Add task';
    taskContent.prepend(title);

    createTaskButton.addEventListener('click', (event) => ((arg) => {
        showTaskForm(event, arg);
      })(projectClassNumber));

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
    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';
    for (let i=0;i<tasksArray.length;i++) {
        let taskExample=document.createElement('li');
        taskList.appendChild(taskExample);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0c7QUFDSTs7QUFFN0Msd0RBQWdCO0FBQ2hCLHNEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVudURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG4gIFxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cbiAgXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG4gIFxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza05hbWUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLm5hbWUgIT09IHRhc2tOYW1lKVxuICAgIH1cbn1cbiAgIiwiY2xhc3MgQ3JlYXRlVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eU51bWJlcikge1xuICAgICAgICB0aGlzLnRpdGxlPXRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGU9ZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eU51bWJlcj1wcmlvcml0eU51bWJlcjtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlPXRpdGxlOyAgICBcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgc2V0RGVzYyhkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcbiAgICBnZXREZXNjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlPWR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRhc2s7IiwiaW1wb3J0IHsgc2hvd1Rhc2tMaXN0IH0gZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0c0RPTS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuICAgIGNvbnN0IGFsbFRhc2tzQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgICBhbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlQWxsVGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFsbFRhc2tzKGUpIHtcbiAgICBmb3IgKGxldCBpPTA7aTxwcm9qZWN0c0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgc2hvd1Rhc2tMaXN0KHByb2plY3RzQXJyYXlbaV0uZ2V0VGFza3MoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfVxufSIsImltcG9ydCBsb2FkVGFza0NvbnRlbnQgZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGNsZWFyVGFza0NvbnRlbnQgfSBmcm9tIFwiLi90YXNrc0RPTVwiO1xuXG5leHBvcnQgbGV0IHByb2plY3RzQXJyYXk9W107XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oZSkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJwcm9qZWN0Rm9ybVwiIGNsYXNzPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3RJbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9qZWN0U3VibWl0QnRuXCIgdmFsdWU9XCJBZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdENhbmNlbEJ0blwiIHZhbHVlPVwiQ2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPmA7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFN1Ym1pdEJ0bicpO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9MaXN0KTtcblxuICBjb25zdCBjYW5jZWxCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYW5jZWxCdG4nKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICBwcm9qZWN0Rm9ybS5pbm5lckhUTUw9Jyc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KGUpIHtcbiAgICBsZXQgcHJvamVjdE5hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZT09JycpIHJldHVybjtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICBzaG93UHJvamVjdExpc3QoKTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdWwnKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgZm9yIChsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RXhhbXBsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYXNrQ29udGVudCk7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmlubmVyVGV4dD1wcm9qZWN0c0FycmF5W2ldLmdldE5hbWUoKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEV4YW1wbGUpO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUluZGV4PWRlbGV0ZUJ1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgY2xlYXJUYXNrQ29udGVudCgpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmlubmVySFRNTD0nJzsgICBcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3UHJvamVjdDtcblxuXG4iLCJpbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcblxuXG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQoZSkge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBjbGVhclRhc2tGb3JtKCk7XG4gICAgbGV0IHByb2plY3RDbGFzc051bWJlcj1lLnRhcmdldC5jbGFzc05hbWU7XG4gICAgc2hvd1Rhc2tMaXN0KHByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXRUYXNrcygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q2xhc3NOdW1iZXIpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PXByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXROYW1lKCk7XG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idXR0b24nKTtcbiAgICBjcmVhdGVUYXNrQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgLy9jcmVhdGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoYHRhc2stYnV0dG9uLSR7cHJvamVjdENsYXNzTnVtYmVyfWApO1xuICAgIC8vY3JlYXRlVGFza0J1dHRvbi5pbm5lclRleHQ9J0FkZCB0YXNrJztcbiAgICB0YXNrQ29udGVudC5wcmVwZW5kKHRpdGxlKTtcblxuICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+ICgoYXJnKSA9PiB7XG4gICAgICAgIHNob3dUYXNrRm9ybShldmVudCwgYXJnKTtcbiAgICAgIH0pKHByb2plY3RDbGFzc051bWJlcikpO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybShlLHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwidGFza0Zvcm1cIiBjbGFzcz1cIiR7cHJvamVjdENsYXNzTnVtYmVyfVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZVwiIG5hbWU9XCJ0YXNrLWR1ZVwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFza1N1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2tDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgIFxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiAoKGFyZykgPT4ge1xuICAgICAgICBnZXRUYXNrRm9ybVZhbHVlcyhldmVudCwgYXJnKTtcbiAgICAgIH0pKHByb2plY3RDbGFzc051bWJlcikpO1xuXG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcblxuICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGb3JtVmFsdWVzKGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGxldCB0YXNrTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgdGFza2R1ZURhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZHVlJykudmFsdWU7XG5cbiAgICBhZGRUYXNrVG9BcnJheSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyYXkodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKSB7XG4gICAgbGV0IG5ld1Rhc2s9bmV3IENyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSk7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgbGV0IHRhc2tzRnJvbUdpdmVuUHJvamVjdD1wcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0VGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0udGFza3MpO1xuICAgIHNob3dUYXNrTGlzdCh0YXNrc0Zyb21HaXZlblByb2plY3QpXG4gICAgY2xlYXJUYXNrRm9ybSgpO1xufSBcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrTGlzdCh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgZm9yIChsZXQgaT0wO2k8dGFza3NBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCB0YXNrRXhhbXBsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRXhhbXBsZSk7XG5cbiAgICAgICAgbGV0IHRhc2tUaXRsZVBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrVGl0bGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLnRpdGxlfWA7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZVBhcmEpO1xuXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25QYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25QYXJhKTtcblxuICAgICAgICBsZXQgdGFza0RhdGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0RhdGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcblxuICAgICAgICB0YXNrRXhhbXBsZS5jbGFzc0xpc3QuYWRkKGkpO1xuXG4gICAgICAgIGxldCBkZWxldGVUYXNrQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlVGFza0J1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgc2hvd1Rhc2tMaXN0KHRhc2tzQXJyYXkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUw9Jyc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhc2tDb250ZW50KCkge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MPScnO1xuXG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG5cbiAgICBsZXQgcmVtb3ZlZEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idXR0b24nKTtcbiAgICByZW1vdmVkQnV0dG9uLmhpZGRlbj10cnVlO1xuXG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PScnO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUYXNrQ29udGVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgc2hvd0FsbFRhc2tzIH0gZnJvbSBcIi4vbWVudURPTVwiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3QgZnJvbSBcIi4vcHJvamVjdHNET01cIjtcblxuY3JlYXRlTmV3UHJvamVjdCgpO1xuc2hvd0FsbFRhc2tzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9