var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        clearInterval(interval);
    }
    //do whatever here..
}, 2000);



//counter from http://stackoverflow.com/questions/9136261/how-to-make-a-setinterval-stop-after-some-time-or-after-a-number-of-actions
//it allows me to set three distinct intervals for each function, in the absence of a function that really should damn well be in javaScript or Jquery
//viz. a time-elapsed function to allow a function to end after a set period. This works, but it seems very inefficient. On to the next problem!



var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 1){
        clearInterval(interval);
    }
    //do whatever here..
}, ($randomTime*1000));





















'use strict';
//as per convention

$(document).ready(function() {
//


var $randomTime = Math.ceil(Math.random()*5);
//made it global so that I can redefine inside the function (oy)

var $color = ['green', 'yellow', 'red'];
//array to cue in the functions


//The functions below are at the heart of the thing: they
// 1) propel the car forward at a steady pace (green)
// 2) propel the car forward quickly (yellow) and
// 3) propel the car _backwards_ (red).
// See the diagramed sample below to see how!:

// var verde = function () { //<-name the function
//   $("#courseOneLight").removeClass(); //<-clears previous classes
//   $("#courseOneLight").addClass('.greenLight'); //<-adds a new class
//   $(window).on('keydown', function(event) { //<-change the activity of the key press events
//      (event.which === 83) //<-selects the key that performs the action ('s' key)
//       $("#carOne").animate ({. //<-selects the action that will be performed
//         "left" : "+=10px", //<-moves the 'div with the id 'carOne' ten px right per key press
//         });
//       });
// };


var $verde = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass('.greenLight');
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=10px",
  });
 });
};

var $amarillo = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass('.yellowLight');
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=20px",
  });
 });
};

var $rojo = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass('.redLight');
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "-=15px",
  });

 });
};

var $conundrum = function () {
  setInterval(function() {
  $randomTime = (Math.ceil(Math.random()*5));
  for (var i = 0, $len = $color.length; i < $len; i++) {
    var $snorkel = function () {$color[i]};
    $snorkel();
    if ($snorkel === 'green') {
      $verde();
    } else if
    ($snorkel === 'yellow') {
      $amarillo();
    } else {
      $rojo();
    }

 //victory conditions below!
 //the victory code is modified from an alert model posted on: http://stackoverflow.com/questions/7875592/fire-event-if-margin-left-200px
     var $victory = 0;
      setInterval(function(){
        if ($("#carOne").css("left")==="1000px" && $victory===0) {
        alert("You beat the Gridlock!");
        $victory=1;
      }
        else {
        $victory=0;
          }
      },
      1000);
    }(1000*$randomTime);
  });
};

$(window).on('keydown', function(event) {
   (event.which === 84);
    $conundrum();  //gotta call the function!
});

});
