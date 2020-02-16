// # Exercise 13

// * Create the following folder/file structure:
// ```
// /ex_13
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Ask the user to input the number of seconds that he would like to stay in our site
// * Show how many seconds left he has using console.log()
// * Once the session is over show the following message:
// ```
// Your session has expired, come again soon!
// ```

const userInputTime = window.prompt(`How many seconds would you like to stay on this website?`)

let timeLeft = userInputTime;

const timer = function(timeLeft){
    const interval = setInterval(function(){
        if(timeLeft > 0) {
            console.log(`You have ${timeLeft--} seconds left in your session`)  
        }  else if(timeLeft === 0) {
            alert(`Your session has expired.`)
            clearInterval(interval)
        }
    }, 1000)
}

timer(timeLeft)