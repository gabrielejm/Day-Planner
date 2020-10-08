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





  
$('.saveBtn').on('click', function (){
  var findInput = $(this).parent().prev().children('.description').val();
  var key = $(this).parent().parent().attr("id").split("-")[1]
  console.log('findInput:', findInput)
  localStorage.setItem(key, findInput);
      
      
     
})



for (let i = 9; i < 18; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem(i))
}
  
    

 
  
  




