//CommonJS, every file in Node is a module (by default)
// Modules - Encapsulated code (Only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')

// didn't assign this function to a variable and envoked said varible.
require('./7-mind-grenade')

sayHi('susan')
sayHi('john')
sayHi('peter')