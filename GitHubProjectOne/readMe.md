#GRIDLOCK! 
###Or: How I Learned To Stop Worrying And Love Driving In New York!

##Technologies Used: 
1. jQuery, 
2. Google chrome (esp the developer tools)

##Approach Taken:
I approached the game like an equation: first I figured out the order of the variables, operators, etc, then figured out what the component parts were. Once I understood what the process had to be, I then created the smallest of the building blocks--the actions that would take place on each key click. Then I created the functions that contained the intervals, then determined how to cycle through the intervals, before placing those functions inside of a function that activated on a click or key press.

##User Stories:
0. As a user, I should be able to read clear and precise instructions on how to play the game. 
1. As a user, I should be able to start the game by pressing a button (for player one) or clicking the mouse (for player two).
2. As a user, I should be able to see when the game has begun by having the traffic light change from a blank grey state to one of three colors.
3. As a user I should be able to see what state the game is in by observing those traffic lights change color in three stages--from green to yellow to red.
5. As a user, I should be able to see when I am advancing or retreating.
6. As a user, I should be able to play against a second player.
7. As a user, I should be able to see who has won.


##How-to-Use!
Player one and player two race to reach the finish line. Player One advances by pressing the 'S' key, while Player Two advances by clicking the mouse. When the light shows green you go forward, while it shows yellow you slow, but if you are still clicking when it turns to red you will go backwards. The first car to travel 1000 pixels wins!

##Unsolved problems:
I have had a consistent problem checking for victory according to 1000 pixels. I suspect the problem lies in structuring the victory check within the loops I have constructed, rather then in implementing it as my check to stop the interval. Otherwise, it could be a matter of phrasing. Finally, I am looking to set an external timer to determine a high scoring list. 
