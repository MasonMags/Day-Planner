var currentDay = document.getElementById("currentDay")

function getCurrentDate() {
currentDay.textContent = moment().format("dddd, MMMM Do") 
}