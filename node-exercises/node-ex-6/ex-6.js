const executed = () => `this code gets executed after the greet function calls`

const greet = (firstName, lastName, executed) => {
    console.log(`Hi ${firstName} ${lastName}`)
    console.log(`${executed}`)
}

greet('Lemuel', 'Reyes', executed())