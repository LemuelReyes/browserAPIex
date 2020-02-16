// # Exercise 18

// * Create the following folder/file structure:
// ```
// /ex_18
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Add the following html code


// * Select the first link element
// * Add the blue class if the element has the class attribute
// * If not, then add the red class

const firstLink = document.querySelector('a')

if(firstLink.hasAttributes('class')) {
    firstLink.classList.add('azul')
} else {
    firstLink.classList.add('rojo')
}