const Whitelist = require('../database/models/whitelist.model.js')

/**
 *
 * @returns All the users whitelisted.
 */
exports.getWhitelist = async () => {
    return Whitelist.find({})
}

/**
 *
 * @returns if a user is in the whitelist.
 * @param user String
 */
exports.checkWhiteList = async (_name) => {
    const user = await Whitelist.find({ name: _name })
    if (user) return true
    return false
}

/**
 *
 * @param {string} _name
 * @returns the userId
 */
exports.getUserId = async (_name) => {
    const user = await Whitelist.findOne({ name: _name })
    if (user) return user.userId
    return false
}
