'use strict';
//as per convention
$(document).ready(function() {
//loads the functions only after jquery has been loaded
var $randomTime = Math.floor(((Math.random() * 10) + 1)*1000);




//var ranodmTime creates a ceiling and multiples it by eight thousand to ensure that
//the time is computed in seconds, rather than miliseconds.


//GO FUNCTIONS BELOW!
//The functions below are at the heart of the thing: they
// 1) propel the car forward at a steady pace (green)
// 2) propel the car forward quickly (yellow) and
// 3) propel the car _backwards_ (red).
// See the diagramed sample below to see how!:
//
// var $verdeGreen = function () {.  <--creates a function called 'verdeGreen'
//   $("#courseOneLight").removeClass();  <--clears all classes for the ID 'ourseOneLight'
//   $("#courseOneLight").addClass('.greenLight'); <--adds class 'greenLight', makes light green
//   $(window).off();  <--clears previous key press actions
//   $(window).on('keydown', function(event) {. <--adds key press action specifically:
//    (event.which === 83);   <--a listener for key press 83 ('S')
//    $("#carOne").animate ({. <--sets what happens on key press 83
//     "left" : "+=10px",  <--moves the car ten pixels from the left to the right per/press
//   });
//  });
// };


var $verdeGreen = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass("greenLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=10px",
  });
 });
};


var $amarilloYellow = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass("yellowLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=20px",
  });
 });
};



var $rojoRed = function () {
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass("redLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "-=15px",
  });

 });
};



//var $goGreen = function (){     <--creates a function called 'goGreen', adapted from: //http://stackoverflow.com/questions/9136261/how-to-make-a-setinterval-stop-after-some-time-or-after-a-number-of-actions


// var timesRunVerde = 0;         <--creates a variable for a click counterunique to this variable
// var $verde = setInterval(function(){  <--sets the interval function
//     timesRunVerde += 1;  <--adds plus one to the counter
//     if(timesRunVerde === 2){  <--stop point
//         clearInterval($verde); <--ends the function, moves on to the next one!
//     }
//   verdeGreen();  <--executes function verdeGreen (see above) within the function goGreen
// }), $randomTime; <--the ssecond half of the interval function, the time to elapse,
                  //<--set here to the variable '$randomTime'
// };


var $timesRunVerde = 0;
var $goGreen = function (){
  var $verde = setInterval(function(){
    $timesRunVerde += 1;
    if($timesRunVerde === 2){
      clearInterval($verde);
    }
    var $timesRunRojo =0;   //<--to reset the run time of the class before it to ensure it runs the next cycle through (check to make sure this has proper scope)
    $verdeGreen();
  }),$randomTime;
};

var $timesRunAmarillo = 0;
var $goYellow = function (){
  var $amarillo = setInterval(function(){
    $timesRunAmarillo += 1;
    if($timesRunAmarillo === 2){
      clearInterval($amarillo);
    }
    var $timesRunVerde =0;
    $amarilloYellow();
  }),$randomTime;
};


var timesRunRojo = 0;
var $goRed = function (){
  var $rojo = setInterval(function(){
    timesRunRojo += 1;
    if(timesRunRojo === 2){
      clearInterval($rojo);
    }
    var $timesRunAmarillo =0;
    $rojoRed();
  }),$randomTime;
};


var $conundrum = function () {
  setInterval(function(){
 if ($("#carOne").css("left")==="1000px") {
      alert("You beat the Gridlock!");
      clearInterval($conundrum)
    }
    $goGreen();
    $goYellow();
    $goRed();
    },30000);
}

$(window).on('keydown', function(event) {
 (event.which === 84);
    $conundrum();  //gotta call the function!
  });
});









