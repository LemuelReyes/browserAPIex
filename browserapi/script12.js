// # Exercise 12

// * Create the following folder/file structure:
// ```
// /ex_12
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Add a timer to show the user how many seconds has passed sinse he opened the site (every second)
// * Use console.log() to show the seconds

let count = 0;

const timer =  function(count) {

    interval = setInterval(function(){
        console.log(`You have been on this site for ${count++} seconds`)   
    }, 1000)
}

timer(count)

