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

}
function showProjectList() {
    const projectList=document.querySelector('.projects-ul');
    projectList.innerHTML='';
    for (let i=0;i<projectsArray.length;i++) {
        let projectExample=document.createElement('li');
        projectExample.classList.add(i);
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

        let renameButton=document.createElement('button');
        renameButton.classList.add(i);
        renameButton.innerText='Rename';
        projectExample.appendChild(renameButton);
        renameButton.addEventListener('click',function() {
            let renameIndex=renameButton.className;
            projectsArray.splice(renameIndex,1)
            showProjectList();
        });


    }
}



function closeProjectForm() {
    
}


export default createNewProject;
