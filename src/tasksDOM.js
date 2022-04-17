import CreateTask from "./createTask";
import Project from "./createProject";
import { projectsArray } from "./projectsDOM.js";
import { generateAllTasks } from "./menuDOM";


function loadTaskContent(e) {
    clearTaskList();
    clearTaskForm();
    let projectClassNumber=e.target.className;
    showTaskList(projectsArray[projectClassNumber].getTasks());
    console.log(projectClassNumber);
    const taskContent=document.querySelector('.right-content');
    let title=document.querySelector('.content-title');
    title.innerText=projectsArray[projectClassNumber].getName();
    const createTaskButton=document.querySelector('.task-button');
    createTaskButton.removeAttribute('hidden');
    taskContent.prepend(title);

    createTaskButton.addEventListener('click', (event) => ((arg) => {
        showTaskForm(event, arg);
      })(projectClassNumber));

}

export function loadAllTaskContent(index) {
    deleteAddTaskButton()
    let projectClassNumber=`${index}`;
    console.log(projectClassNumber)
    showAllTaskList(projectsArray[projectClassNumber].getTasks());
    const taskContent=document.querySelector('.right-content');
    const taskList=document.querySelector('.task-ul');
    let title=document.querySelector('.content-title');
    title.innerText='All tasks';
    taskContent.prepend(title);
}

export function loadTodaysTaskContent(index) {
    deleteAddTaskButton()
    let today = new Date().toISOString().slice(0, 10);
    let tasksFromGivenProject=projectsArray[index].getTasks();
    let todayTasks=[];
    for (let task of tasksFromGivenProject) {
        let dueDate=task.getDate();
        if (today===dueDate) {
            todayTasks.push(task)
        }
    showAllTaskList(todayTasks);
    }
}

export function loadWeeklyTaskContent(index) {
    deleteAddTaskButton();
    let today = new Date();
    let weeklyTasks=[];
    const weekFromToday = new Date();
    weekFromToday.setDate(weekFromToday.getDate() + 7);
    let tasksFromGivenProject=projectsArray[index].getTasks();
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
    let newTask=new CreateTask(title,description,dueDate);
    projectsArray[projectClassNumber].addTask(newTask);
    let tasksFromGivenProject=projectsArray[projectClassNumber].getTasks();
    console.log(projectsArray[projectClassNumber].tasks);
    showTaskList(tasksFromGivenProject)
    clearTaskForm();
} 

export function showTaskList(tasksArray) {
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

export function showAllTaskList(tasksArray) {
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
            generateAllTasks();
            //generateTodayTasks();
            //generateWeeklyTasks();
        });
    }
}



function clearTaskForm() {
    const taskForm = document.querySelector(".task-form");
    taskForm.innerHTML='';
}

export function clearTaskList() {
    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';
}

function deleteAddTaskButton() {

    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;
}

export function clearTaskContent() {
    const taskForm = document.querySelector(".task-form");
    taskForm.innerHTML='';

    const taskList=document.querySelector('.task-ul');
    taskList.innerHTML='';

    let removedButton=document.querySelector('.task-button');
    removedButton.hidden=true;

    let title=document.querySelector('.content-title');
    title.innerText='';
}


export default loadTaskContent;
