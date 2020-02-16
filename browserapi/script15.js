// # Exercise 15

// * Create the following folder/file structure:
// ```
// /ex_15
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element


// * Select the element with the `important id` using `getElementById` selector
// * Select `all` elements that are `inside a list item element` using `querySelectorAll`
// * Select the `ul element` using `querySelector`
// * Select the element with the `blue class` use the proper selector
// * Show all selected elements using console.log as output

const important = document.getElementById('important')
console.log(important)
const allElem = document.querySelectorAll('li')
console.log(allElem)
const ul = document.querySelector('ul')
console.log(ul)
const blue = document.querySelector('.blue')
console.log(blue)
