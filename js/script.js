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