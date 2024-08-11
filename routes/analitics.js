const express = require('express')
const router = express.Router()
const {
    checkWhitelist,
    checkUpToDate,
    analiticsGet,
    matchgameIdandStat
    //computeStats
} = require('../controller/analitics.controller')

router
    .route('/:user')
    .get(checkWhitelist, checkUpToDate, matchgameIdandStat, analiticsGet)

module.exports = router
