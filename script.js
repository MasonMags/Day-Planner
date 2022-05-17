var currentDay = document.getElementById("currentDay")

var hourlySchedule = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "01",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "02",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "03",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "04",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "05",
        meridiem: "PM",
        reminder: ""
    },
]


window.onload = getCurrentDate();

function getCurrentDate() {
    currentDay.textContent = moment().format("dddd, MMMM Do");
    displayTimeblocks(); 
}



// function displayReminders() {
    
// }

function init() {
    var storedReminders = JSON.parse(localStorage.getItem("reminders"));

    if (storedReminders) {
        reminders = storedReminders;
    }

    saveReminders();
    //displayTimeblocks();
}

function saveReminders() {
    for(var j=0; j < hourlySchedule.length; j++)
    localStorage.setItem("reminders", JSON.stringify(hourlySchedule[j].reminder));
}


function displayTimeblocks() {
    for (var i = 0; i < hourlySchedule.length; i++) {

        //var reminders = hourlySchedule[i].reminder

        var hourContainer = document.getElementById("hour-container")
        var hourRow = document.createElement("form")
        hourRow.setAttribute("class", "row")
        hourContainer.append(hourRow)

        var hourField = document.createElement("div")
        hourField.setAttribute("class", "hour")
        hourField.setAttribute("class", "col-md-2 hour") 
        hourField.textContent = hourlySchedule[i].time + " " + hourlySchedule[i].meridiem
        hourRow.append(hourField)

       
       // var planField = document.createElement("div") 
       // planField.setAttribute("class", "col-md-9 description p-0")
        planInput = document.createElement("textarea")
        planInput.setAttribute("class", "col-md-9 description p-0")
        planInput.textContent = hourlySchedule[i].reminder;
        //planField.append(planInput)
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
            event.preventDefault();
            var reminderText = planInput.value;
            //var reminders = []
        
            if (reminderText === ""){
                 return;
             }
            var reminders = hourlySchedule[i].reminder.split(' ');
            reminders.push(reminderText);
            reminder.join(" ")
            planInput.value="";
        });
    }; 
}
init();

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