var numHours = 24;
var date = $("#currentDay");
var container = $(".container");
var currentHour = moment().format("H");

var timerInterval = setInterval(function() {
    currentHour = moment().format("H");
    console.log(currentHour);
},60000);

var blockBank = $(".block");
console.log(blockBank);
date[0].textContent = moment().format("dddd, MMM Do hh:mm");

for (var i = 0; i < blockBank.length; i++) {
    if (currentHour > blockBank[i].dataset.num) {
        blockBank[i].children[1].style.background = "grey";
    } else if (currentHour == blockBank[i].dataset.num) {
        blockBank[i].children[1].style.background = "red"
    } else {
        blockBank[i].children[1].style.background = "green"
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
var authorname = "hello";
var testEl = $(`<p>${authorname}</p>`);


var dataToIndex = 8;
var inputEls = $(".input");
var scheduleText = ["","","","","","","","","",""];

container.on("click", function (event) {
    /*  If the event is on a button then
        we take the corresponding input value
        set the input as the default
    */
   console.log();
    if (event.target.localName == "button") {
        var targetIndex = event.target.dataset.num - dataToIndex;
        var whatWeWant = inputEls[targetIndex - 8].value;
        scheduleText[targetIndex] = whatWeWant;
    }
//    need the input box
//      need the text from input box
//      set it as the default for the input
//      save it in local storage
});

function save() {
    localStorage.setItem("scheduleText", JSON.stringify.scheduleText);
}

function load() {
    if (localStorage.getItem("scheduleText") !== null) {
        scheduleText = JSON.parse(localStorage.getItem("scheduleText"));
    }
}

function renderSchedule() {

}

// need to load the page of everything in the local storage
    // we're just making an array to make thing easier
// need to clear local storage once the time has passed?
