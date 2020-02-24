const logger = require('./logger');

const isEven = function(number) {
    if(number % 2 === 0) {
       logger.info(`${number} is even`)
    } else {
       logger.error(`${number} is odd`)
    }
} 

module.exports = isEven;

