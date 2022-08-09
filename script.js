$(function () {});

var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A")


var planWorkday = [
    {
        time: "9 AM",
        event: ""
    },
    {
        time: "10 AM",
        event: ""
    },
    {

        time: "11 AM",
        event: ""
    },
    {
        time: "12 PM",
        event: ""
    },
    {
        time: "1 PM",
        event: ""
    },
    {
        id: "2 PM",
        event: ""
    },
    {
        time: "03 PM",
        event: ""
    },
    {
        time: "4 PM",
        event: ""
    },
    {
        time: "5 PM",
        event: ""
    },
]

var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
    planWorkday = workEvents
}

$("#currentDay").text(today)

planWorkday.forEach(function(timeBlock, index){
    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row = '<div class="time-block" id="' +
    index +
    '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel +
    '</div><textarea class="form-control ' +
    blockColor +
    '">' +
    timeBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
})
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