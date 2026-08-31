/*
========================
DevLaunch JavaScript
========================
*/

console.log("DevLaunch JavaScript Started 🚀");

const getStartedBtn = document.getElementById("getStartedBtn");

const startMessage = document.getElementById("startMessage");

getStartedBtn.addEventListener("click", function (event){
    event.preventDefault();
    startMessage.classList.toggle("d-none");
})

const streakCount = document.getElementById("streakCount");

const topicsCount = document.getElementById("topicsCount");

const problemsCount = document.getElementById("problemsCount");

const projectsCount = document.getElementById("projectsCount");

const streak = 30;
const topics = 33;
const problems = 100;
const projects = 10;

streakCount.textContent = streak;

topicsCount.textContent = topics;

problemsCount.textContent = problems;

projectsCount.textContent = projects;


const javaProgressBar = document.getElementById("javaProgressBar");

const dsaProgressBar = document.getElementById("dsaProgressBar");

const jsProgressBar = document.getElementById("jsProgressBar");

const projectsProgressBar = document.getElementById("projectsProgressBar");

const javaProgress = 80;

const dsaProgress = 65;

const jsProgress = 55;

const projectsProgress = 70;

javaProgressBar.style.width = javaProgress + "%";

dsaProgressBar.style.width = dsaProgress + "%";

jsProgressBar.style.width = jsProgress + "%";

projectsProgressBar.style.width = projectsProgress + "%";

const javaProgressText = document.getElementById("javaProgressText");

const dsaProgressText = document.getElementById("dsaProgressText");

const jsProgressText = document.getElementById("jsProgressText");

const projectsProgressText = document.getElementById("projectsProgressText");

javaProgressText.textContent = javaProgress + "%";

dsaProgressText.textContent = dsaProgress + "%";

jsProgressText.textContent = jsProgress + "%";

projectsProgressText.textContent = projectsProgress + "%";

// Learning Goal

const goalInput = document.getElementById("goalInput");

const setGoalBtn = document.getElementById("setGoalBtn");

const goalMessage = document.getElementById("goalMessage");

const goalText = document.getElementById("goalText");


setGoalBtn.addEventListener("click", function(){
    const goal = goalInput.value.trim();

    if(goal === ""){
        goalMessage.classList.add("d-none");
        return;
    }
    goalText.textContent = goal;

    goalMessage.classList.remove("d-none");

    goalMessage.classList.remove("alert-success");
    goalMessage.classList.add("alert-primary");
    completeGoalBtn.textContent = "Mark Complete";
    completeGoalBtn.disabled = false;


})

const completeGoalBtn = document.getElementById("completeGoalBtn");

completeGoalBtn.addEventListener("click", function (){
    goalMessage.classList.remove("alert-primary");
    goalMessage.classList.add("alert-success");
    completeGoalBtn.textContent = "Completed ✅";
    completeGoalBtn.disabled = true;
} 

)
