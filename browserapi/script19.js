// <!-- # Exercise 19

// * Create the following folder/file structure:
// ```
// /ex_19
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Select the h1 and div element and assign them to a new variable
// * If any of these elements has attributes then add the striked class to both of them
// * Else add the bold class
// * Remove the name attribute from the div element (use the web console elements tab to see the result) -->

const h1 = document.querySelector('h1')
const div = document.querySelector('div')

if( h1.hasAttributes() || div.hasAttributes()) {
    h1.setAttribute('class', 'striked')
    div.setAttribute('class', 'striked')
} else {
    h1.setAttribute('class', 'bold')
    div.setAttribute('class', 'bold')
}

const remove = div.removeAttribute('name')