var numHours = 24;
var container = $(".container");
var hours = [];

console.log(container);
for (var i = 0; i < numHours; i++) {
    hours.push($("<div>"));
    hours[i].appendTo(container);
    hours[i].text("Hour" + i);
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
