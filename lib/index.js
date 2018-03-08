const { promisify } = require('util')
const shapeshift = require('./shapeshift')

// Prmosify like a boss
Object.keys(shapeshift).forEach(key => {
  if (typeof shapeshift[key] === 'function') {
    shapeshift[key] = promisify(shapeshift[key])
  }
})

module.exports = shapeshift
