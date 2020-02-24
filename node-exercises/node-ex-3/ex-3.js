const logger = require('logger')

// console.log(`
//     Hello Node.js (use debug method)
//     Node.js is great!! (use info method)
//     Warning, Warning, I think we have a Warning (use warn method)
//     Mayday Mayday, we have an errro, repeat.. we have an error (use error method)
// `)


logger.debug(`This is a debug message`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`This is a info message`);
logger.warn(`This is a warning`);
logger.error(`This is an error`);