/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasksDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksDOM */ "./src/tasksDOM.js");


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
    projectsArray.push(projectName);
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
        projectExample.innerText=projectsArray[i];
        projectList.appendChild(projectExample);

        let deleteButton=document.createElement('button');
        deleteButton.classList.add(i);
        deleteButton.innerText='Delete';
        projectExample.appendChild(deleteButton);
        deleteButton.addEventListener('click',function() {
            let deleteIndex=deleteButton.className;
            projectsArray.splice(deleteIndex,1)
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");


let tasksArray=[];

function loadTaskContent(e) {
    let projectName=e.target.firstChild;
    console.log(projectName);
    const taskContent=document.querySelector('.right-content');
    const createTaskButton=document.createElement('button');
    createTaskButton.classList.add('task-button');
    createTaskButton.innerText='Add task';
    taskContent.appendChild(createTaskButton);
    createTaskButton.addEventListener('click', showTaskForm);

    return projectName;
}

function showTaskForm(e) {
    const taskForm = document.querySelector(".task-form");
    taskForm.innerHTML = `<form id="taskForm" class="" autocomplete="off">
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
    submitTaskButton.addEventListener('click', getTaskFormValues);

    const cancelTaskButton=document.querySelector('.taskCancelBtn');
    cancelTaskButton.addEventListener('click',() => {
      taskForm.innerHTML='';

  });
                          
}

function getTaskFormValues(e) {
    let project=loadTaskContent();
    let taskName=document.getElementById('taskName').value;
    let taskDescription=document.getElementById('taskDescription').value;
    let taskdueDate=document.getElementById('task-due').value;

    addTaskToArray(project,taskName, taskDescription, taskdueDate);
}

function addTaskToArray(project,title,description,dueDate) {
    let newTask=new _createTask__WEBPACK_IMPORTED_MODULE_0__["default"](project,title,description,dueDate);
    tasksArray.push(newTask);
    console.log(tasksArray);
    showTaskList()
} 

function showTaskList() {
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
            showTaskList();
        });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0I7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSxpREFBaUQsaURBQWU7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRU07O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZEOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTs7QUFFQTtBQUNBLGtDQUFrQyxzQkFBc0I7QUFDeEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7O1VDM0Y5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNPO0FBQzdDLHdEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0c0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3NET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWF0ZVRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHlOdW1iZXIpIHtcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlPWR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHlOdW1iZXI9cHJpb3JpdHlOdW1iZXI7XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTsgICAgXG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIHNldERlc2MoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVzYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlPXRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzazsiLCJpbXBvcnQgbG9hZFRhc2tDb250ZW50IGZyb20gXCIuL3Rhc2tzRE9NXCI7XG5cbmxldCBwcm9qZWN0c0FycmF5PVtdO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RGb3JtKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKGUpIHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwicHJvamVjdEZvcm1cIiBjbGFzcz1cIlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0SW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByb2plY3QgTmFtZVwiIG1heGxlbmd0aD1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvamVjdFN1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByb2plY3RDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICBjb25zdCBzdWJtaXRCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTdWJtaXRCdG4nKTtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdFRvTGlzdCk7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsQnRuJyk7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgcHJvamVjdEZvcm0uaW5uZXJIVE1MPScnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlzdChlKSB7XG4gICAgbGV0IHByb2plY3ROYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgICBpZiAocHJvamVjdE5hbWU9PScnKSByZXR1cm47XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICBzaG93UHJvamVjdExpc3QoKTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdWwnKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgZm9yIChsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RXhhbXBsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgICBwcm9qZWN0RXhhbXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYXNrQ29udGVudCk7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmlubmVyVGV4dD1wcm9qZWN0c0FycmF5W2ldO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RXhhbXBsZSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQ9J0RlbGV0ZSc7XG4gICAgICAgIHByb2plY3RFeGFtcGxlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGRlbGV0ZUluZGV4LDEpXG4gICAgICAgICAgICBzaG93UHJvamVjdExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uaW5uZXJIVE1MPScnOyAgIFxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXdQcm9qZWN0O1xuIiwiaW1wb3J0IENyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5sZXQgdGFza3NBcnJheT1bXTtcblxuZnVuY3Rpb24gbG9hZFRhc2tDb250ZW50KGUpIHtcbiAgICBsZXQgcHJvamVjdE5hbWU9ZS50YXJnZXQuZmlyc3RDaGlsZDtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgdGFza0NvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWNvbnRlbnQnKTtcbiAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNyZWF0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBjcmVhdGVUYXNrQnV0dG9uLmlubmVyVGV4dD0nQWRkIHRhc2snO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdXR0b24pO1xuICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VGFza0Zvcm0pO1xuXG4gICAgcmV0dXJuIHByb2plY3ROYW1lO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oZSkge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwidGFza0Zvcm1cIiBjbGFzcz1cIlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBOYW1lXCIgbWF4bGVuZ3RoPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza0Rlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZVwiIG5hbWU9XCJ0YXNrLWR1ZVwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFza1N1Ym1pdEJ0blwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhc2tDYW5jZWxCdG5cIiB2YWx1ZT1cIkNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgIFxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VGFza0Zvcm1WYWx1ZXMpO1xuXG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgIHRhc2tGb3JtLmlubmVySFRNTD0nJztcblxuICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGb3JtVmFsdWVzKGUpIHtcbiAgICBsZXQgcHJvamVjdD1sb2FkVGFza0NvbnRlbnQoKTtcbiAgICBsZXQgdGFza05hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IHRhc2tkdWVEYXRlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWR1ZScpLnZhbHVlO1xuXG4gICAgYWRkVGFza1RvQXJyYXkocHJvamVjdCx0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrZHVlRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0FycmF5KHByb2plY3QsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSkge1xuICAgIGxldCBuZXdUYXNrPW5ldyBDcmVhdGVUYXNrKHByb2plY3QsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSk7XG4gICAgdGFza3NBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xuICAgIHNob3dUYXNrTGlzdCgpXG59IFxuXG5mdW5jdGlvbiBzaG93VGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdWwnKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUw9Jyc7XG4gICAgZm9yIChsZXQgaT0wO2k8dGFza3NBcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCB0YXNrRXhhbXBsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRXhhbXBsZSk7XG5cbiAgICAgICAgbGV0IHRhc2tUaXRsZVBhcmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrVGl0bGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLnRpdGxlfWA7XG4gICAgICAgIHRhc2tFeGFtcGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZVBhcmEpO1xuXG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb25QYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uUGFyYS5pbm5lclRleHQ9YCR7dGFza3NBcnJheVtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25QYXJhKTtcblxuICAgICAgICBsZXQgdGFza0RhdGVQYXJhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0RhdGVQYXJhLmlubmVyVGV4dD1gJHt0YXNrc0FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICAgICAgdGFza0V4YW1wbGUuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcblxuICAgICAgICB0YXNrRXhhbXBsZS5jbGFzc0xpc3QuYWRkKGkpO1xuXG4gICAgICAgIGxldCBkZWxldGVUYXNrQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICAgIGRlbGV0ZVRhc2tCdXR0b24uaW5uZXJUZXh0PSdEZWxldGUnO1xuICAgICAgICB0YXNrRXhhbXBsZS5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXg9ZGVsZXRlVGFza0J1dHRvbi5jbGFzc05hbWU7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShkZWxldGVJbmRleCwxKVxuICAgICAgICAgICAgc2hvd1Rhc2tMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRUYXNrQ29udGVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCBjcmVhdGVOZXdQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzRE9NXCI7XG5jcmVhdGVOZXdQcm9qZWN0KClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==