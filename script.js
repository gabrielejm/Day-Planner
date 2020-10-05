

//task one: DONE
  //under header, show current date (use moment.js)
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().format('h')
var presentTime = $('#currentDay').text(currentDate);
var dateObj = new Date();
var zeroHour = $('#zero-hour').dateObj.setHours(9);
var firstHour = $('#first-hour').dateObj.setHours(10);
var secondHour = $('#second-hour').dateObj.setHours(11);
var thirdHour = $('#third-hour').dateObj.setHours(12);
var fourthHour = $('#fourth-hour').dateObj.setHours(13);
var fifthHour = $('#fifth-hour').dateObj.setHours(14);
var sixthHour = $('#sixth-hour').dateObj.setHours(15);
var seventhHour = $('#seventh-hour').dateObj.setHours(16);
var eighthHour = $('#eigth-hour').dateObj.setHours(17);

var timeBlocks = [zeroHour, firstHour, secondHour, thirdHour, fourthHour, fifthHour, sixthHour, seventhHour, eighthHour]













//task three:
  // (.addclass) use to add class to change color based on time (past, present, future)
function checkTime() {
  for (let i = 0; i < timeBlocks.length; i++) {
    if (currentHour < timeBlocks[i]) {
      
    }
    
  }

  
  
};


//task four:
  //figure out how to save user input as a value(.val?), must ONLY save event on the same line as the save button
  //task six:
  //figure out how to save text into local storage by clicking save button
function saveData() {
  
}


 
  
  


//task seven:
  //figure out how to make sure user text stays saved when the page is refreshed
  //get value from local storage and put back into text area when page is refreshed.

//optional
  //add clear all local storage

