var SMBasic = require('./SMBasic.js')
var SMProtection = require('./SMProtection.js')
var SMExhaustiveness = require('./SMExhaustiveness.js')
var SMReplacementNotIntant = require('./SMReplacementNotIntant.js')

module.exports = function() {

    return {
        Basic: SMBasic,
        Protection: SMProtection,
        Exhaustiveness: SMExhaustiveness,
        ReplacementNotIntant: SMReplacementNotIntant
    }

}()