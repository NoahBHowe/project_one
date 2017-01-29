Gridlock Proposal


I propose to create a ‘racing’ game predicated on using click events to increase a div’s margin down the page, subject to a red-light, green-light, yellow-light set of class-based-conditions. JavaScript would cycle through classes according to a random time, with each class changing the speed at which the div (car) moves: green propels the car at 2% of the page a click, red also propels the car at 2% of the page a click but backwards (-2%) while yellow moves the car forward at twice the speed of green (4% per click) but for half the time (constricting the ceiling and floor of the math.random function). Each class shift would be accompanied by a change in the stoplight image (from red to green to yellow etc.). After each click event, the browser would check for margin===900px (the working finish line), with the first car to reach that line declared the winner.

A stretch goal will be to make it player vs. computer, racing to complete the ‘course’ by a set time, with a further stretch goal being the creation of a ‘high score’ board.



Rough Layout of the three classes:

            GREEN1 CLASS
1) green class = on keypress (early idea is for 's')
2)  on keypress --> increase margin +2%;
3)  change background of DIV STOPLIGHT to Green! ----->(Q: should I use a pre-sculpted image or                                                         create my own stoplight?)
4) SET DURATION OF CLASS: to
            {function getRandom(min,max) {
              min = math.ceil(say----six?);
              max = math.max (say----ten?);
              return Math.floor(math.random()*(max-min))+min;}
              }}
5) Checks margin after key press to  900px
    if so: VICTORY! (so alert('CHECKERED FLAG!'))
      -->Modal for 8bit checkered flag image? _or_ checkered cab?!


            YELLOW1 CLASS
1) yellow class = on keypress (early idea is for 's')
2)  on keypress --> increase margin +4%;
3)  change background of DIV STOPLIGHT to yellow! ----->(Q: should I use a pre-sculpted image or                                                         create my own stoplight?)
4) SET DURATION OF CLASS: to
            {function getRandom(min,max) {
              min = math.ceil(say----three?);
              max = math.max (say----six?);
              return Math.floor(math.random()*(max-min))+min;}
              }}
5) Checks margin after key press to  900px
    if so: VICTORY! (so alert('CHECKERED FLAG!'))
      -->Modal for 8bit checkered flag image? _or_ checkered cab?! -->
      -->ENDS GAME. Creates Modal, moves to "ELSE"
          -->the Else is a kill switch, right?

            RED1 CLASS
1) RED class = on keypress (early idea is for 's')
2)  on keypress --> increase margin +2%;
3)  change background of DIV STOPLIGHT to Green! ----->(Q: should I use a pre-sculpted image or                                                         create my own stoplight?)
4) SET DURATION OF CLASS: to
            {function getRandom(min,max) {
              min = math.ceil(say----six?);
              max = math.max (say----ten?);
              return Math.floor(math.random()*(max-min))+min;}
              }}
// 5) Checks margin after key press to  900px
//     if so: VICTORY! (so alert('CHECKERED FLAG!'))
//       -->Modal for 8bit checkered flag image? _or_ checkered cab?!
// --> don't check during red  light--no need, wasteful coding.


-->next! repeat a parallel clock/set of classes for player 2--->adds an element of chance to it!

As for the structuring of the thing:
    1) the board is split into 1/4/1/1/4/1
          1 column margin
            4 columns for the left car
              1 column for the left traffic light
              1 column for the right traffic light
            4 columns for the right car
          1 column margin
              -->or! have a div/header at the top which holds two different divs,
              each of which is a clock (examine appended images!)

    2) each car should be contained within a master-div, thus the whole car is moving, not just the trunk or the hood or sun-roof

    3) In an ideal world, I would love to capture an eight bit feel for the whole thing, but I recognize that that might be best left for after I finish the rough graphics and the finished javaScript/JQuery.

    4) --->CHECKERBOARD EFFECT FOR BANNER //courtesy of Lea Verou: http://jsfiddle.net/leaverou/SUgfD/?utm_source=website&utm_medium=embed&utm_campaign=SUgfD

    //discern proper attribution style or don't dare fucking use it.

      -->

                    body {
                    background-image:
                      -moz-linear-gradient(45deg, #000 25%, transparent 25%),
                      -moz-linear-gradient(-45deg, #000 25%, transparent 25%),
                      -moz-linear-gradient(45deg, transparent 75%, #000 75%),
                      -moz-linear-gradient(-45deg, transparent 75%, #000 75%);
                    background-image:
                      -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #000), color-stop(.25, transparent)),
                      -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #000), color-stop(.25, transparent)),
                      -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #000)),
                      -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #000));

                    -moz-background-size:100px 100px;
                    background-size:100px 100px;
                    -webkit-background-size:100px 101px; /* override value for shitty webkit */

                    background-position:0 0, 50px 0, 50px -50px, 0px 50px;
                }
    5) See attached wireframe sketch!
    6)    THE DOWN ARROW (if you use it) came from this website: http://www.guralp.com/sw/NAM-mk2-reflash.shtml
          via a google search on 26 January 2017;
    7)





