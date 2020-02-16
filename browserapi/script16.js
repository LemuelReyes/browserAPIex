// # Exercise 16

// * Create the following folder/file structure:
// ```
// /ex_16
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Select the first link element
// * Show the href and class attributes values
// * Use any of the ways that you know

const firstLink = document.querySelector('a')
console.log(firstLink)
console.log(firstLink.getAttribute('href'))
console.log(firstLink.getAttribute('class'))