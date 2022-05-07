var currentDay = document.getElementById("currentDay")

var hourlySchedule = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "AM",
        comment: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM",
        comment: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM",
        comment: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM",
        comment: ""
    },
    {
        id: "4",
        hour: "01",
        time: "01",
        meridiem: "PM",
        comment: ""
    },
    {
        id: "5",
        hour: "02",
        time: "02",
        meridiem: "PM",
        comment: ""
    },
    {
        id: "6",
        hour: "03",
        time: "03",
        meridiem: "PM",
        comment: ""
    },
    {
        id: "7",
        hour: "04",
        time: "04",
        meridiem: "PM",
        comment: ""
    },
    {
        id: "8",
        hour: "05",
        time: "05",
        meridiem: "PM",
        comment: ""
    },
]

window.onload = getCurrentDate();

function getCurrentDate() {
    currentDay.textContent = moment().format("dddd, MMMM Do");
    displayTimeblocks(); 
}

function displayTimeblocks() {
    for (var i = 0; i < hourlySchedule.length; i++) {
        var hourContainer = document.getElementById("hour-container")
        var hourRow = document.createElement("form")
        hourRow.setAttribute("class", "row")
        hourContainer.append(hourRow)

        var hourField = document.createElement("div")
        hourField.setAttribute("class", "hour")
        hourField.setAttribute("class", "col-md-2 hour") 
        hourField.textContent = hourlySchedule[i].time + " " + hourlySchedule[i].meridiem
        hourRow.append(hourField)

       
        var planField = document.createElement("div") 
        planField.setAttribute("class", "col-md-9 description p-0")
        planInput = document.createElement("textarea")
        planInput.setAttribute("id", hourlySchedule[i].id)
        planField.append(planInput)
        hourRow.append(planField)

        if (hourlySchedule[i].time < moment().format("HH")){
            planInput.setAttribute("class", "past")
        } 
        else if (hourlySchedule[i].time === moment().format("HH")){
            planInput.setAttribute("class", "present")
        }
        else if (hourlySchedule[i].time > moment().format("HH")){
            planInput.setAttribute("class", "future")
        }




        
        
    }
}
