'use strict';
//as per convention
$(document).ready(function() { });
//loads the functions only after jquery has been loaded
var $randomTime = Math.floor(((Math.random() * 10) + 1)*1000);




//var ranodmTime creates a ceiling then multiplies it by 1000 to ensur the time is computed in seconds, rather than miliseconds.


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

//*PLAYER ONE*!!!

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


//*PLAYER TWO*!!!

var $verdeGreenTwo = function () {
  $("#courseTwoLight").removeClass();
  $("#courseTwoLight").addClass("greenLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 76);
   $("#carTwo").animate ({
    "left" : "+=10px",
  });
 });
};


var $amarilloYellowTwo = function () {
  $("#courseTwoLight").removeClass();
  $("#courseTwoLight").addClass("yellowLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 76);
   $("#carOne").animate ({
    "left" : "+=20px",
  });
 });
};



var $rojoRedTwo = function () {
  $("#courseTwoLight").removeClass();
  $("#courseTwoLight").addClass("redLight");
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 76);
   $("#carTwo").animate ({
    "left" : "-=15px",
  });

 });
};




//INTERVAL FUNCTIONS!!

//PLAYER ONE!!

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

//PLAYER TWO INTERVAL FUNCTIONS!!!

var $timesRunVerdeTwo = 0;
var $goGreenTwo = function (){
  var $verdeTwo = setInterval(function(){
    $timesRunVerdeTwo += 1;
    if($timesRunVerdeTwo === 2){
      clearInterval($verdeTwo);
    }
    var $timesRunRojoTwo =0;
    $verdeGreenTwo();
  }),$ranodomTime;
};

var $timesRunAmarilloTwo = 0;
var $goYellowTwo = function (){
  var $amarilloTwo = setInterval(function(){
    $timesRunAmarillo += 1;
    if($timesRunAmarilloTwo === 2){
      clearInterval($amarilloTwo);
    }
    var $timesRunVerdeTwo =0;
    $amarilloYellowTwo();
  }),$ranodomTime;
};


var timesRunRojoTwo = 0;
var $goRedTwo = function (){
  var $rojoTwo = setInterval(function(){
    timesRunRojoTwo += 1;
    if(timesRunRojoTwo === 2){
      clearInterval($rojoTwo);
    }
    var $timesRunAmarilloTwo =0;
    $rojoRedTwo();
  }),$ranodomTime;
};

//Master interval functions!!******
//**ONE**//
var $conundrum = function () {
  setInterval(function(){
 if ($("#carOne").css("left")==="1000px") {
      alert("You beat the Gridlock!");
      clearInterval($conundrum);
    }
    $goGreen();
    $goYellow();
    $goRed();
    },$randomTime);
};
//**TWO**//
var $conundrumTwo = function () {
  setInterval(function(){
 if ($("#carTwo").css("left")==="1000px") {
      alert("You beat the Gridlock!");
      clearInterval($conundrumTwo);
    }
    $goGreenTwo();
    $goYellowTwo();
    $goRedTwo();
    },$ranodomTime);
};








$(window).on('keydown', function(event) {
 (event.which === 84);
    $conundrum(); //gotta call the functions!
  });


});









