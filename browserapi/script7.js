const firstMessage = window.alert('This program adds all the numbers you got')

const confirm= window.confirm('Would you like to try?')

if(confirm === true) {
    const addFirst = window.prompt('Enter first number')
    const addSecond = window.prompt('Enter second number')
    const sum = parseInt(addFirst, 10) + parseInt(addSecond, 10)
    // const result = parseInt(sum, 10);
    window.alert(
        `
        The sum of ${addFirst} and ${addSecond} is: ${sum}
        `
    )
} else {
    alert('aww too bad')
}