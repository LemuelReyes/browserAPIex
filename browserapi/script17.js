// # Exercise 17

// * Create the following folder/file structure:
// ```
// /ex_17
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element


// * Ask the user to select a color showing the following message:
// ```
// Please choose & input one of the following colors: green, blue or red
// ```
// * Select the first link element
// * Add the user selected color as class name to the selected element (first link)
// * Avoid adding the class if the user inputs a color that's not an option
// * So if the user selects blue as color we need to add the blue class to the first link

let selectColor = window.prompt(`Select one of these colors: green, blue, or red`)

if(selectColor !== 'green' && selectColor !== 'blue' && selectColor !== 'red') {
    selectColor = window.prompt(`Please enter a valid value. Green, blue or red`)
} else {
    selectColor;
}

const firstLink = document.querySelector('a')

firstLink.classList.add(selectColor)