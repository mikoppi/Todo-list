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

    setDate() {
        this.dueDate=this.dueDate;
    }

    getDate() {
        return this.dueDate;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTask);

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

function removeTaskButton() {
    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;
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
/* harmony import */ var _projectsDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsDOM */ "./src/projectsDOM.js");


(0,_projectsDOM__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDTztBQUM3Qyx3REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG4gIFxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cbiAgXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG4gIFxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza05hbWUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrTmFtZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLm5hbWUgIT09IHRhc2tOYW1lKVxuICAgIH1cbn1cbiAgIiwiY2xhc3MgQ3JlYXRlVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eU51bWJlcikge1xuICAgICAgICB0aGlzLnRpdGxlPXRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGU9ZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eU51bWJlcj1wcmlvcml0eU51bWJlcjtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlPXRpdGxlOyAgICBcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgc2V0RGVzYyhkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcbiAgICBnZXREZXNjKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREYXRlKCkge1xuICAgICAgICB0aGlzLmR1ZURhdGU9dGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUYXNrOyIsImltcG9ydCBsb2FkVGFza0NvbnRlbnQgZnJvbSBcIi4vdGFza3NET01cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCB7IGNsZWFyVGFza0NvbnRlbnQgfSBmcm9tIFwiLi90YXNrc0RPTVwiO1xuXG5leHBvcnQgbGV0IHByb2plY3RzQXJyYXk9W107XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oZSkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJwcm9qZWN0Rm9ybVwiIGNsYXNzPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3RJbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJvamVjdCBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9qZWN0U3VibWl0QnRuXCIgdmFsdWU9XCJBZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdENhbmNlbEJ0blwiIHZhbHVlPVwiQ2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPmA7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFN1Ym1pdEJ0bicpO1xuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0VG9MaXN0KTtcblxuICBjb25zdCBjYW5jZWxCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDYW5jZWxCdG4nKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICBwcm9qZWN0Rm9ybS5pbm5lckhUTUw9Jyc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaXN0KGUpIHtcbiAgICBsZXQgcHJvamVjdE5hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZT09JycpIHJldHVybjtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICBzaG93UHJvamVjdExpc3QoKTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdWwnKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgZm9yIChsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RXhhbXBsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYXNrQ29udGVudCk7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmlubmVyVGV4dD1wcm9qZWN0c0FycmF5W2ldLmdldE5hbWUoKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEV4YW1wbGUpO1xuXG4gICAgICAgIGxldCBkZWxldGVCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUluZGV4PWRlbGV0ZUJ1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgY2xlYXJUYXNrQ29udGVudCgpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmlubmVySFRNTD0nJzsgICBcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3UHJvamVjdDtcblxuXG4iLCJpbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNET00uanNcIjtcblxuXG5mdW5jdGlvbiBsb2FkVGFza0NvbnRlbnQoZSkge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBjbGVhclRhc2tGb3JtKCk7XG4gICAgbGV0IHByb2plY3RDbGFzc051bWJlcj1lLnRhcmdldC5jbGFzc05hbWU7XG4gICAgc2hvd1Rhc2tMaXN0KHByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXRUYXNrcygpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q2xhc3NOdW1iZXIpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PXByb2plY3RzQXJyYXlbcHJvamVjdENsYXNzTnVtYmVyXS5nZXROYW1lKCk7XG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idXR0b24nKTtcbiAgICBjcmVhdGVUYXNrQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgLy9jcmVhdGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoYHRhc2stYnV0dG9uLSR7cHJvamVjdENsYXNzTnVtYmVyfWApO1xuICAgIC8vY3JlYXRlVGFza0J1dHRvbi5pbm5lclRleHQ9J0FkZCB0YXNrJztcbiAgICB0YXNrQ29udGVudC5wcmVwZW5kKHRpdGxlKTtcblxuICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+ICgoYXJnKSA9PiB7XG4gICAgICAgIHNob3dUYXNrRm9ybShldmVudCwgYXJnKTtcbiAgICAgIH0pKHByb2plY3RDbGFzc051bWJlcikpO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybShlLHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwidGFza0Zvcm1cIiBjbGFzcz1cIiR7cHJvamVjdENsYXNzTnVtYmVyfVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZVwiIG5hbWU9XCJ0YXNrLWR1ZVwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFza1N1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2tDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgIFxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiAoKGFyZykgPT4ge1xuICAgICAgICBnZXRUYXNrRm9ybVZhbHVlcyhldmVudCwgYXJnKTtcbiAgICAgIH0pKHByb2plY3RDbGFzc051bWJlcikpO1xuXG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcblxuICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGb3JtVmFsdWVzKGUsIHByb2plY3RDbGFzc051bWJlcikge1xuICAgIGxldCB0YXNrTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgdGFza2R1ZURhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZHVlJykudmFsdWU7XG5cbiAgICBhZGRUYXNrVG9BcnJheSh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyYXkodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJvamVjdENsYXNzTnVtYmVyKSB7XG4gICAgbGV0IG5ld1Rhc2s9bmV3IENyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSk7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0Q2xhc3NOdW1iZXJdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgbGV0IHRhc2tzRnJvbUdpdmVuUHJvamVjdD1wcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0uZ2V0VGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W3Byb2plY3RDbGFzc051bWJlcl0udGFza3MpO1xuICAgIHNob3dUYXNrTGlzdCh0YXNrc0Zyb21HaXZlblByb2plY3QpXG4gICAgY2xlYXJUYXNrRm9ybSgpO1xufSBcblxuZnVuY3Rpb24gc2hvd1Rhc2tMaXN0KHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTD0nJztcbiAgICBmb3IgKGxldCBpPTA7aTx0YXNrc0FycmF5Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IHRhc2tFeGFtcGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFeGFtcGxlKTtcblxuICAgICAgICBsZXQgdGFza1RpdGxlUGFyYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tUaXRsZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0udGl0bGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlUGFyYSk7XG5cbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvblBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25QYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvblBhcmEpO1xuXG4gICAgICAgIGxldCB0YXNrRGF0ZVBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrRGF0ZVBhcmEuaW5uZXJUZXh0PWAke3Rhc2tzQXJyYXlbaV0uZHVlRGF0ZX1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGF0ZVBhcmEpO1xuXG4gICAgICAgIHRhc2tFeGFtcGxlLmNsYXNzTGlzdC5hZGQoaSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lclRleHQ9J0RlbGV0ZSc7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkZWxldGVJbmRleD1kZWxldGVUYXNrQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LDEpXG4gICAgICAgICAgICBzaG93VGFza0xpc3QodGFza3NBcnJheSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrTGlzdCgpIHtcbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTD0nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza0NvbnRlbnQoKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUw9Jyc7XG5cbiAgICBjb25zdCB0YXNrTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay11bCcpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTD0nJztcblxuICAgIGxldCByZW1vdmVkQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ1dHRvbicpO1xuICAgIHJlbW92ZWRCdXR0b24uaGlkZGVuPXRydWU7XG5cbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQ9Jyc7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdXR0b24oKSB7XG4gICAgbGV0IHJlbW92ZWRCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnV0dG9uJyk7XG4gICAgcmVtb3ZlZEJ1dHRvbi5oaWRkZW49dHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRhc2tDb250ZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgY3JlYXRlTmV3UHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c0RPTVwiO1xuY3JlYXRlTmV3UHJvamVjdCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=