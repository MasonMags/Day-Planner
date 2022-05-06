var currentDay = document.getElementById("currentDay")

var hourlySchedule = [
    {
        hour: "09",
        time: "09",
        meridiem: "AM",
        comment: ""
    },
    {
        hour: "10",
        time: "10",
        meridiem: "AM",
        comment: ""
    },
    {
        hour: "11",
        time: "11",
        meridiem: "AM",
        comment: ""
    },
    {
        hour: "12",
        time: "12",
        meridiem: "PM",
        comment: ""
    },
    {
        hour: "01",
        time: "01",
        meridiem: "PM",
        comment: ""
    },
    {
        hour: "02",
        time: "02",
        meridiem: "PM",
        comment: ""
    },
    {
        hour: "03",
        time: "03",
        meridiem: "PM",
        comment: ""
    },
    {
        hour: "04",
        time: "04",
        meridiem: "PM",
        comment: ""
    },
    {
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

    }
}
