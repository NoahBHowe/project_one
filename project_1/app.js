$(document).ready(function() {

var $randomTime = Math.ceil((Math.random()*5000));







});








var $goGreen = function (){
var timesRunVerde = 0;
var $verde = setInterval(function(){
    timesRunVerde += 1;
    if(timesRunVerde === 2){
        clearInterval($verde);
    }
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass('.greenLight');
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=10px",
  });
 });
}), $randomTime;
verde();
};


var $goYellow = function (){
var timesRunAmarillo = 0;
var $amarillo = setInterval(function(){
    timesRunAmarillo += 1;
    if(timesRunAmarillo === 2){
        clearInterval($amarillo);
    }
  $("#courseOneLight").removeClass();
  $("#courseOneLight").addClass('.yellowLight');
  $(window).off();
  $(window).on('keydown', function(event) {
   (event.which === 83);
   $("#carOne").animate ({
    "left" : "+=20px",
  });
 });
}), $randomTime;
amarillo();
};


