var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A")

var currentDay = document.getElementById("currentDay")

var planWorkday = [
    {
        time: "9 AM",
        reminder: ""
    },
    {
        time: "10 AM",
        reminder: ""
    },
    {

        time: "11 AM",
        reminder: ""
    },
    {
        time: "12 PM",
        reminder: ""
    },
    {
        time: "1 PM",
        reminder: ""
    },
    {
        id: "2 PM",
        reminder: ""
    },
    {
        time: "03 PM",
        reminder: ""
    },
    {
        time: "4 PM",
        reminder: ""
    },
    {
        time: "5 PM",
        reminder: ""
    },
]

let reminders = JSON.parse(localStorage.getItem("plan")) || []


window.onload = getCurrentDate();

function getCurrentDate() {
    currentDay.textContent = moment().format("dddd, MMMM Do");
    displayTimeblocks(); 
}




// function init() {
//     var storedReminders = JSON.parse(localStorage.getItem("reminders"));

//     if (storedReminders) {
//         reminders = storedReminders;
//     }

//     saveReminders();
//     //displayTimeblocks();
// }

// function saveReminders() {
//     for(var j=0; j < hourlySchedule.length; j++)
//     localStorage.setItem("reminders", JSON.stringify(hourlySchedule[j].reminder));
// }


function displayTimeblocks() {
    for (var i = 0; i < hourlySchedule.length; i++) {

        var hourContainer = document.getElementById("hour-container")
        var hourRow = document.createElement("form")
        hourRow.setAttribute("class", "row")
        hourContainer.append(hourRow)

        var hourField = document.createElement("p")
        hourField.setAttribute("class", "col-md-2 hour") 
        hourField.textContent = hourlySchedule[i].time + " " + hourlySchedule[i].meridiem
        hourRow.append(hourField)

        planInput = document.createElement("textarea")
        planInput.setAttribute("class", "col-md-9 description p-0")
        hourRow.append(planInput)

        if (hourlySchedule[i].time < moment().format("HH")){
            planInput.setAttribute("class", "past")
        } 
        else if (hourlySchedule[i].time === moment().format("HH")){
            planInput.setAttribute("class", "present")
        }
        else if (hourlySchedule[i].time > moment().format("HH")){
            planInput.setAttribute("class", "future")
        }

        var saveImage = document.createElement("i")
        saveImage.setAttribute("class", "far fa-save fa-lg")
        var saveButton = document.createElement("button")
        saveButton.setAttribute("class", "col-md-1 saveBtn")
        saveButton.append(saveImage)
        hourRow.append(saveButton)   

        saveButton.addEventListener("click", function(event){
            reminders.push(planInput.value)
            localStorage.setItem("plan", JSON.stringify(reminders));
            renderEvents();
        });

        function renderEvents(){
            for (let j = 0; j < reminders.length; j++){
               
            }
        }
    }; 
}
//  

// document.querySelector('btn').addEventListener("click", function(event){
//     event.preventDefault();
//     var reminderText = planInput.value.trim();

//     if (reminderText === ""){
//         return;
//     }

//     reminders.push(reminderText);
//     planInput.value="";
// });




// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     const arr = hourlySchedule || []
//     //var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//     hourlySchedule.reminder = $(this).siblings(".description").children(".future").val();
//     console.log();
//     saveReminders();
//     displayReminders();
// })