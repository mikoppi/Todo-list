import loadTaskContent, { clearTaskContent } from './tasksDOM';
import Project from './createProject';

export const projectsArray = [];

function createNewProject() {
  const projectButton = document.querySelector('.add-project');
  projectButton.addEventListener('click', showProjectForm);
}

function showProjectForm(e) {
  const projectForm = document.querySelector('.project-form');
  projectForm.innerHTML = `<form id="projectForm" class="" autocomplete="off">
                                <div class="inputField">
                                    <input type="text" id="projectInput" placeholder="Enter Project Name" maxlength="24">
                                    <div class="formButtons">
                                        <input type="button" class="projectSubmitBtn" value="Add">
                                        <input type="button" class="projectCancelBtn" value="Cancel">
                                    </div>
                                </div>
                            </form>`;
  const submitButton = document.querySelector('.projectSubmitBtn');
  submitButton.addEventListener('click', addProjectToList);

  const cancelButton = document.querySelector('.projectCancelBtn');
  cancelButton.addEventListener('click', () => {
    projectForm.innerHTML = '';
  });
}

function addProjectToList(e) {
  const projectName = document.getElementById('projectInput').value;
  if (projectName == '') return;
  projectsArray.push(new Project(projectName));
  console.log(projectsArray);
  showProjectList();
  closeProjectForm();
}

function showProjectList() {
  const projectList = document.querySelector('.projects-ul');
  projectList.innerHTML = '';
  for (let i = 0; i < projectsArray.length; i++) {
    const projectExample = document.createElement('li');
    projectExample.classList.add(i);
    projectExample.addEventListener('click', loadTaskContent), { once: true };
    projectExample.innerText = projectsArray[i].getName();
    projectList.appendChild(projectExample);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add(i);
    deleteButton.innerText = 'Delete';
    projectExample.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
      const deleteIndex = deleteButton.className;
      projectsArray.splice(deleteIndex, 1);
      clearTaskContent();
      showProjectList();
    });
  }
}

function closeProjectForm() {
  const projectForm = document.querySelector('.project-form');
  projectForm.innerHTML = '';
}

export default createNewProject;
