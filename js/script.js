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