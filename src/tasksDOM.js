import CreateTask from "./createTask";
import Project from "./createProject";
import { projectsArray } from "./projectsDOM.js";

let tasksArray=[];

function loadTaskContent(e) {
    let projectClassNumber=e.target.className;
    console.log(projectClassNumber);
    const taskContent=document.querySelector('.right-content');
    const createTaskButton=document.createElement('button');
    createTaskButton.classList.add('task-button');
    createTaskButton.innerText='Add task';
    taskContent.appendChild(createTaskButton);
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
    let newTask=new CreateTask(title,description,dueDate);
    projectsArray[projectClassNumber].addTask(newTask);
    let tasksFromGivenProject=projectsArray[projectClassNumber].getTasks();
    console.log(projectsArray[projectClassNumber].tasks);
    showTaskList(tasksFromGivenProject)
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
export default loadTaskContent;