Problems


  jQuery timer:
      From StackOverFlow: http://stackoverflow.com/questions/2133166/loop-timer-in-javascript


              accepted
              Note that setTimeout and setInterval are very different functions:

              setTimeout will execute the code once, after the timeout.
              setInterval will execute the code forever, in intervals of the provided timeout.
              Both functions return a timer ID which you can use to abort the timeout. All you have to do is store that value in a variable and use it as argument to clearTimeout(tid) or clearInterval(tid) respectively.

              So, depending on what you want to do, you have two valid choices:

              // set interval
              var tid = setInterval(mycode, 2000);
              function mycode() {
                // do some stuff...
                // no need to recall the function (it's an interval, it'll loop forever)
              }
              function abortTimer() { // to be called when you want to stop the timer
                clearInterval(tid);
              }
              Both are very common ways of achieving the same.

              //Noah:-->Now instead of '2000', replace that with the ceiling/floor math.random which brings me to:

  Math.Random() -->specifically floors and ceilings!
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

              Getting a random number between two values (non-inclusive):

                  function getRandomInt(min, max) {
                  min = Math.ceil(min);
                  max = Math.floor(max);
                  return Math.floor(Math.random() * (max - min)) + min;
                  }

              Or getting a random number (non integer):

                  function getRandomArbitrary(min, max) {
                  return Math.random() * (max - min) + min;
                  }

  JQuery class loop on timer closeout!
    ?????--> brainstorm ideas and then duck, google, try, professor



