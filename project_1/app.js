



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
     (event.which === 83)
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
     (event.which === 83)
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
     (event.which === 83)
      $("#carOne").animate ({
        "left" : "-=15px",
        });

      });
};

//the following code is modified from an alert model posted on: http://stackoverflow.com/questions/7875592/fire-event-if-margin-left-200px

 var victory = 0;
 $(document).ready(function(){
   setInterval(function(){
      if ($("#carOne").css("left")=='1000px' && eventtrig=0) {

         alert("You beat the Gridlock!");
         $victory=1;
      }
      else {
         $victory=0;
      }
   }, 1000);
});


//the following code is modified from an alert model posted on: http://stackoverflow.com/
// var arr = ["carrots", "bananas", "onions"];

// for (var i = 0, len = color.length; i < len; i++) {
//     //every element accesible via arr[i];
//     //example:
//     console.log(color[i]);
// }
//SAMPLE FOR LOOP







// }

// (if ($color === 'green') {
//     $verde ();
// } else if ($color === 'yellow') {
//     $amarillo ();
// } else {
//     $rojo;
// });












var $conundrum = setInterval(function() {
$randomTime = (Math.ceil(Math.random()*5));
for (var i = 0, len = $color.length; i < len; i++) {
    var $snorkel = color[i]
$snorkel();
if ($snorkel === 'green') {
    $verde();
} else if
   $snorkel === 'yellow'} {
    $amarillo();
} else {
    $rojo();
}








var victory = 0;
 $(document).ready(function(){
   setInterval(function(){
      if ($("#carOne").css("left")=='1000px' && eventtrig=0) {

         alert("You beat the Gridlock!");
         $victory=1;
      }
      else {
         $victory=0;
      }
   }, 1000);
});

});









// var $(verde) = function () {

//clears all classes from #courseOneLight
//adds class 'greenLight'




// sets 's' key as keydown for moving car


