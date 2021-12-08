// Sets the date and time at the top of the page
var numHours = 24;
var date = $("#currentDay");
var container = $(".container");
var currentHour = moment().format("H");
var currentDate = moment().format("YYYY MM DD");

var timerInterval = setInterval(function() {
    currentHour = moment().format("H");
    console.log(currentHour);
},60000);


// Gathering all the block elements into a single variable to change color depending on the time

var blockBank = $(".block");
date[0].textContent = moment().format("dddd, MMM Do hh:mm");

for (var i = 0; i < blockBank.length; i++) {
    if (currentHour > blockBank[i].textContent) {
        blockBank[i].style.background = "grey";
    } else if (currentHour == blockBank[i].textContent) {
        blockBank[i].style.background = "red"
    } else {
        blockBank[i].style.background = "green"
    }
}
/*
    make all the hour objects
        input
        time
        enter event listener
        save local storage
        load local storage
    attach all the hour objects
    use moment to find current time
    time interval
        refresh every min
        checks if hour is after the time
*/

// Example of how to use template literals. May use it later to replace html elements to change based on user input
var authorname = "hello";
var testEl = $(`<p>${authorname}</p>`);

var scheduleText = {};

container.on("click", function (event) {
    if (event.target.localName === "button") {
        scheduleText[event.target.dataset.id] = $("#" + event.target.dataset.id).val();
        
        save();
    }
});

function save() {
    localStorage.setItem(currentDate, JSON.stringify(scheduleText));
}

function load() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (currentDate === key) {
            scheduleText = JSON.parse(localStorage.getItem(key));
        }
    }

}

function renderSchedule() {
    for (id in scheduleText) {
        $("#" + id).val(scheduleText[id]);
    }
}

load();
renderSchedule();

// need to load the page of everything in the local storage
    // we're just making an array to make thing easier
// need to clear local storage once the time has passed?
