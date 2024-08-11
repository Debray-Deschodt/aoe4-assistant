const Analitics = require('../database/models/aoeStat.model.js')

/**
 *
 * @param {string} user
 * @returns analitics
 */
exports.getAnaliticsByUser = async (user) => {
    return Analitics.findOne({ user: user })
}

/**
 * Create new analitics for un user
 * @param {string} user
 * @param {number} userId
 * @returns the new analitics
 */
exports.createAnalitics = async (user, userId) => {
    try {
        let analitics = new Analitics({
            user: user,
            userId: userId,
            civilisations: [[]]
        })
        analitics = await analitics.save()
        return analitics
    } catch (e) {
        throw e
    }
}

/**
 *
 * @param {string} user
 * @param {AnaliticsInterface} analitics
 * @returns
 */
exports.modifyAnalitics = async (user, analitics) => {
    try {
        const newAnalitics = await Analitics.findOneAndUpdate(
            { user: user },
            analitics
        )
        return newAnalitics
    } catch (e) {
        throw e
    }
}
