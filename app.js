//=======DATA MANAGMENT SECTION=======

let projects = ["tasks"];

let tasks = [];


//get task button code 
addTaskBtn = document.querySelector(".addTask");

//get add task form fields

getTitle = document.querySelector(".title");
getDescription = document.querySelector(".description");
getDueDate = document.querySelector(".dueDate");
getPriority = document.querySelector(".priority");



function task(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.projects = ["tasks"] 
  }


//add task button code
addTaskBtn = document.querySelector(".addTask");
function addTask() {
  tasks.push(new task(getTitle.value, getDescription.value, getDueDate.value, getPriority.value));
}

addTaskBtn.addEventListener("click", addTask);


//PROJECT CREATION

//get project name field
projectName = document.querySelector(".projectName");

//get new project btn
newProjectBtn = document.querySelector(".addProject");

//add project button code
function addProject() {
  projects.push(projectName.value);
}

newProjectBtn.addEventListener("click", addProject);


//=======DISPLAY SECTION=======

//gets the little display field thats supposed to show the task a user has selected, you know, that one 
selectedDisplay = document.querySelector(".selected");

//function for selecting tasks
function selectTask(id) {
  selected = tasks[id].title;
  selectedID = id;

  selectedDisplay.value = selected;
}

//function for adding selected task to a project
function addSelected(id) {
  (tasks[selectedID].projects).push(projects[id]+id)
}

//get show projects btn
showProjectsBtn = document.querySelector(".showProjects");

//get project DIV
projectsDiv = document.querySelector(".projects");

//BEGIN add show projects button code
function showProjects() 
{
  //clears display div
  projectsDiv.innerHTML = "<br>";

  //loops through projects to display them
for (var i = 0; i < [projects.length]; i++) {
  projectsDiv.innerHTML += "<div class="+projects[i]+"><b>"+projects[i]+"</b>  <button onclick='addSelected("+i+")'>+</button></div>";  

 
  //loops through tasks to find ones tagged with the current project 
  for (var a = 0; a < tasks.length; a++) {
    tagged = false;
    thisTask = tasks[a];
  
    //loops through each task's tag list to find current project  
    for (var b = 0; b < thisTask.projects.length; b++) {
      if (projects[i] == "tasks") {
        tagged = true;
      }
      if (thisTask.projects[b] == projects[i]+i) {
        tagged = true;
      }
    }
  
    //BEGIN adds tagged task to display
    if (tagged == true) {

    //button to selct this task that passes it's place in array to the selectTask function
    projectsDiv.innerHTML += "<br>";
    projectsDiv.innerHTML += "<button onclick='selectTask("+a+")'>"+thisTask.title+"</button>";  

    //this section displays each task's atributes
    projectsDiv.innerHTML += "<br>";  
    projectsDiv.innerHTML += "Description: "+thisTask.description+"<br>";  
    projectsDiv.innerHTML += "Due date: "+thisTask.dueDate+"<br>";  
    projectsDiv.innerHTML += "Priority: "+thisTask.priority+"<br>"; 

    }
    //END adds tagged task to display
    

  }


  projectsDiv.innerHTML += "<br><br>";
}

}

showProjectsBtn.addEventListener("click", showProjects);
//END add show projects button code