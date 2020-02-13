const number = window.prompt('Enter a number to check if it is odd or even.')

if(number % 2 === 0) {
    alert(
        `
        ${number} is even!
        `
    ) 
} else {
    alert(
        `
        ${number} is odd!
        `
    )
}
