const {
    addConnectionLog
} = require('../database/geolocalisationLogs/geolocalisationLogs')

exports.ensureAuthenticated = async (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        try {
            const IP = req.ip.split(':')
            await addConnectionLog(IP[IP.length - 1])
        } catch (e) {
            throw e
        }
        res.status(403).end()
    }
}
