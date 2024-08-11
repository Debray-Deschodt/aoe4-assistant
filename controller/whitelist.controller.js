const { getWhitelist } = require('../queries/whitelist.queries.js')

exports.whitelistGet = async (req, res, next) => {
    try {
        const users = await getWhitelist()
        res.json(users)
    } catch (e) {
        throw e
    }
}
