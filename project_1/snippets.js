PSEUDO CODE!!!!!
First, clear all classes then apply a class of green to #courseOneCar for a duration of (math.random(min,max)). At the end of the interval,


    -->apply a class of yellow to #courseOneCar for a duration of (math.random(min,max)). At the end of the interval,


    -->apply a class of red to #courseOneCar for a duration of (math.random(min,max)). At the end of the interval, check if margin === 900px, if it does, -->DECLARE VICTORY! if it does not -->
              START AGAIN IF KEY PRESSES HAVEN'T FOUND VICTORY!


  FURTHER MORE:
      EACH KEY PRESS EVENT ALSO CHECKS FOR VICTORY (MARGIN === 900PX? VICTORY!, CONTINUE)






So! Basically, I have three functions that I want to cycle between, checking inbetween each whether a condition has been met.
    in each condition, I assign a key press event a set of actions and change the background to an object by assigning a relevant class
SO!
1) Clear all previous classes for an id and assign a class to an id in jQuery
2) Set an interval for an action
3) math.random min and max
4) create a named function that assigns a set of actions
5)  --



1) $("#courseOneLight").removeClass();
   $("#courseOneLight").addClass('.greenLight')








var = verde

INITIAL JAVASCRIPT SNIPPETS

from: stackOverflow : http://stackoverflow.com/questions/25825832/js-class-cycle-and-loop

var animals = ['cats', 'dogs', 'lions', 'fish'];
var counter = 0;

var animalsLoop = setInterval(function() {

    $('.js-animals').text(animals[counter]);

    if (counter === animals.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}, 2000);




From gettysburg address:
$("#carOne").on("keypress"(function () {
    // $("#main-nav").fadeOut(3000), function() {
    //   alert("animation cicked!");
    // };
    // $("#main-nav").slideToggle(3000, "linear", function() {
    //     $(this).slideDown(500, function() {
    $("#carOne").animate( {
      "absolute": "+=20px"
    }, 1000);



$('input').on('keydown', function(event) {
   (event.which === 13) {




    $("input").keypress(function(){
    $("span").text(i += 1);
});




    $("button").click(function(){
    var x = $("p").position();
    alert("Top: " + x.top + " Left: " + x.left);
});
