

//task one: DONE
  //under header, show current date (use moment.js)
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().format();
var presentTime = $('#currentDay').text(currentDate);
var zeroHour = $('#hour-zero').val(9);
var firstHour = $('#hour-one').val(10);
var secondHour = $('#hour-two').val(11);
var thirdHour = $('#hour-three').val(12);
var fourthHour = $('#hour-four').val(13);
var fifthHour = $('#hour-five').val(14);
var sixthHour = $('#hour-six').val(15);
var seventhHour = $('#hour-seven').val(16);
var eighthHour = $('#hour-eight').val(17);

var timeBlocks = [zeroHour, firstHour, secondHour, thirdHour, fourthHour, fifthHour, sixthHour, seventhHour, eighthHour]

console.log('currentHour:', currentHour)


checkTime()


//task three:
  // (.addclass) use to add class to change color based on time (past, present, future)
function checkTime() {
  for (var i = 0; i < timeBlocks.length; i++) {
    if (currentHour < timeBlocks[i].val()) {
      $(timeBlocks[i]).addClass('future');
    }

    else if (currentHour > timeBlocks[i].val()) {
      $(timeBlocks[i]).addClass('past');

    } else {
      $(timeBlocks[i]).addClass('present');
      
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
function getData () {

}
//optional
  //add clear all local storage

