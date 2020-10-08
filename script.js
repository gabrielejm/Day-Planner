

//task one: DONE
  //under header, show current date (use moment.js)
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().hour();
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
var saveBtn = $('.saveBtn');



var timeBlocks = [zeroHour, firstHour, secondHour, thirdHour, fourthHour, fifthHour, sixthHour, seventhHour, eighthHour]

console.log('currentHour:', currentHour)


checkTime()



//task three:
  // (.addclass) use to add class to change color based on time (past, present, future)
function checkTime() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].val())
    if (currentHour > hour) {
      $(timeBlocks[i]).addClass('past');
    console.log(timeBlocks[i].val());

    }

    else if (currentHour === hour) {
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('present');

    } else {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('past');

      $(timeBlocks[i]).addClass('future');
      
    }
    }

  
  
};


//task four:
  //figure out how to save user input as a value(.val?), must ONLY save event on the same line as the save button
  //task six:
  //figure out how to save text into local storage by clicking save button
  //set time and input in localstorage
  
  // $('.saveBtn').on('click', function (){
  //   var findInput = $(this).parent().prev().children(".description").val();
  //   var time = 
  //   console.log("parent: ",  $(this).parent(".labels"))
  //   console.log("input: ", findInput)
  //   localStorage.setItem('event', findInput, time);
  // })


  
    $('.saveBtn').on('click', function (){
      var findInput = $(this).parent().prev().children('.description').val();
      var key = $(this).parent().parent().attr("id").split("-")[1]
      console.log('findInput:', findInput)
      localStorage.setItem(key, findInput);
      
      
     
    })



for (let i = 9; i < 18; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem(i))
}
  
    

 
  
  


//task seven:
  //figure out how to make sure user text stays saved when the page is refreshed
  //get value from local storage and put back into text area when page is refreshed.
function getData () {

}
  
//optional
  //add clear all local storage

