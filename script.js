
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


 function timeBlockColor() {
    var currentHour = moment().hour();
    
        if (currentHour > 9) {
          $("#9am").addClass("past");
        } else if (currentHour >= 9 && currentHour < 10) {
          $("#9am").addClass("present");
        } else if (currentHour < 9) {
          $("#9am").addClass("future");
        }
        if ( currentHour> 10) {
          $("#10am").addClass("past");
        } else if (currentHour >= 10 && currentHour < 11) {
          $("#10am").addClass("present");
        } else if (currentHour < 10) {
          $("#10am").addClass("future");
        }
        if (currentHour > 11) {
          $("11am").addClass("past");
        } else if (currentHour >= 11 && currentHour < 12) {
          $("#11am").addClass("present");
        } else if (currentHour < 11) {
          $("#11am").addClass("future");
        }
        if (currentHour > 12) {
          $("#12pm").addClass("past");
        } else if (currentHour >= 12 && currentHour < 13) {
          $("#12pm").addClass("present");
        } else if (currentHour < 12) {
          $("#12pm").addClass("future");
        }
        if (currentHour > 13) {
          $("#1pm").addClass("past");
        } else if (currentHour >= 13 && currentHour < 14) {
          $("#1pm").addClass("present");
        } else if (currentHour < 13) {
          $("#1pm").addClass("future");
        }
        if (currentHour > 14) {
          $("#2pm").addClass("past");
        } else if (currentHour >= 14 && currentHour < 15) {
          $("#2pm").addClass("present");
        } else if (currentHour < 14) {
          $("#2pm").addClass("future");
        }
        if (currentHour > 15) {
          $("#3pm").addClass("past");
        } else if (currentHour >= 15 && currentHour < 16) {
          $("#3pm").addClass("present");
        } else if (currentHour < 15) {
          $("#3pm").addClass("future");
        }
        if (currentHour > 16) {
          $("#4pm").addClass("past");
        } else if (currentHour >= 16 && currentHour < 17) {
          $("#4pm").addClass("present");
        } else if (currentHour < 16) {
          $("#4pm").addClass("future");
        }
        if (currentHour > 17) {
          $("#5pm").addClass("past");
        } else if (currentHour >= 17 && currentHour < 18) {
          $("#5pm").addClass("present");
        } else if (currentHour < 17) {
          $("#5pm").addClass("future");
        }
      }




var time = $(this).siblings(".hour").text();
var plan = $(this).siblings(".plan").val();
localStorage.setItem(time, plan);

  
$("#9am .description").val(localStorage.getItem("hour9"));
$("#10am .description").val(localStorage.getItem("hour10"));
$("#11am .description").val(localStorage.getItem("hour11"));
$("#12am .description").val(localStorage.getItem("hour12"));
$("#1pm .description").val(localStorage.getItem("hour13"));
$("#2pm .description").val(localStorage.getItem("hour14"));
$("#3pm .description").val(localStorage.getItem("hour15"));
$("#4pm .description").val(localStorage.getItem("hour16"));
$("#5pm .description").val(localStorage.getItem("hour17"));