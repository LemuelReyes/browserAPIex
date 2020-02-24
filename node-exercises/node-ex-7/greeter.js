const greet = (firstName, lastName, executed) => {
    console.log(`Hi ${firstName} ${lastName}`)
    console.log(`${executed}`)
}

module.exports = greet;