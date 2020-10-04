//task one: DONE
  //under header, show current date (use moment.js)
var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format('h:mm:ss a')
var presentTime = 
$('#currentDay').text(currentDate);



//task two: DONE
  //make timeblocks, row, 3 columns for each hour

//task three:
  // (.setAttribute) use to add class to change color based on time (past, present, future)
function checkTime() {
  var d = new Date();
  var currentHour = d.getHours();
  
  
};

//task four:
  //add (<textarea>) to html for user input. 
  //figure out how to save user input as a value.(.val?)

//task five:
  //add a save button on the farthest right column


//task six:
  //figure out how to save text into local storage by clicking save button
function saveData() {
  
}

//task seven:
  //figure out how to make sure user text stays saved when the page is refreshed
  //get value from local storage and put back into text area when page is refreshed.

//optional
  //add clear all local storage

