// HTML Elements
var dateEl = $("#currentDay");
var containerEl = $(".container");
var hourEl = $(".block");

// Time Variables
var currentHour = parseInt(moment().format("H"));
var currentDate = moment().format("YYYY MM DD");

// Array storing plans for the day
var scheduleText = {};

var timerInterval = setInterval(refresh(),60000);


// Event Listener for save buttons
containerEl.on("click", function (event) {
    if (event.target.localName === "button") {
        scheduleText[event.target.dataset.id] = $("#" + event.target.dataset.id).val().trim();
        save();
    }
});

// Updates the variable elements on the page every minute
function refresh() {
    dateEl[0].textContent = moment().format("dddd, MMM Do hh:mm");
    
    for (var i = 0; i < hourEl.length; i++) {
        var blockHour = parseInt(hourEl[i].dataset.hour);

        if (currentHour > blockHour) {
            hourEl[i].style.background = "grey";
        } else if (currentHour == blockHour) {
            hourEl[i].style.background = "red";
        } else {
            hourEl[i].style.background = "green"
        }
    }
}

// Save scheduleText to localStorage
function save() {
    localStorage.setItem(currentDate, JSON.stringify(scheduleText));
}

// Loads scheduleText from localStorage
function load() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (currentDate === key) {
            scheduleText = JSON.parse(localStorage.getItem(key));
        }
    }

}

// Renders today's schedule using scheduleText
function renderSchedule() {
    for (id in scheduleText) {
        $("#" + id).val(scheduleText[id]);
    }
}

refresh();
load();
renderSchedule();