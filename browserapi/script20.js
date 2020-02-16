// # Exercise 20

// * Create the following folder/file structure:
// ```
// /ex_20
//   |-- index.html
// ```

// ## index.html
// * Create a basic HTML document
// * Create a script tag on the document head element
// * Add the following html code

// * Select the ul element
// * Show the ul children elements as output
// * Select the 2nd child element, assign it to a variable and assign the green class to it
// * Select the 4th child element, assign it to a variable and assign the red class to it
// * Use the selected child elements to show the parent one as output
// * Using one of the child elements get a reference to the parent and add the orange class to it

// ## Expected result:
// ```html
//   <ul class="orange">
//     <li>Item 1</li>
//     <li class="green">Item 2</li>
//     <li>Item 3</li>
//     <li class="red">Item 4</li>
//     <li>Item 5</li>
//   </ul>
// ```

const parentUL = document.querySelector('ul')
const children = parentUL.children;
console.log(children)
const secondChild = children[1].classList.add('green')
const fourthChild = children[3].classList.add('red')
// const whoIsYourDaddy = document.querySelectorAll('li')
// const IAm = whoIsYourDaddy.parentNode;
// console.log(IAm)

const firstChildsMom = children[0].parentElement;
const makeMomOrange = firstChildsMom.classList.add('orange')