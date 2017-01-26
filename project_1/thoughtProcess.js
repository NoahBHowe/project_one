Gridlock Proposal


I propose to create a ‘racing’ game predicated on using click events to increase a div’s margin down the page, subject to a red-light, green-light, yellow-light set of class-based-conditions. JavaScript would cycle through classes according to a random time, with each class changing the speed at which the div (car) moves: green propels the car at 2% of the page a click, red also propels the car at 2% of the page a click but backwards (-2%) while yellow moves the car forward at twice the speed of green (4% per click) but for half the time (constricting the ceiling and floor of the math.random function). Each class shift would be accompanied by a change in the stoplight image (from red to green to yellow etc.). After each click event, the browser would check for margin===900px (the working finish line), with the first car to reach that line declared the winner.

A stretch goal will be to make it player vs. computer, racing to complete the ‘course’ by a set time, with a further stretch goal being the creation of a ‘high score’ board.



Rough Layout of the three classes:

            GREEN CLASS
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


            YELLOW CLASS
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
      -->Modal for 8bit checkered flag image? _or_ checkered cab?!

            RED CLASS
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








