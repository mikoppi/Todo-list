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
                                        <input type="submit" class="projectSubmitBtn" value="Add">
                                        <input type="button" class="projectCancelBtn" value="Cancel">
                                    </div>
                                </div>
                            </form>`;
  const submitButton=document.querySelector('.projectSubmitBtn');
  submitButton.addEventListener('click', showProjectName);

  const cancelButton=document.querySelector('projectCancelBtn');
  cancelButton.addEventListener('click',deleteProject);

}

function showProjectName(e) {
    const projectList=document.querySelector('.projects-ul');
    let projectName=document.getElementById('projectInput').value;
    let projectExample=document.createElement('li');
    projectExample.innerText=projectName;
    projectList.appendChild(projectExample);

}


export default createNewProject;
