const express = require('express')
const router = express.Router()
const whitelist = require('./whitelist')
const analitics = require('./analitics')

router.use('/whitelist', whitelist)
router.use('/analitics', analitics)
router.use('/', (req, res) => {
    res.status(404).end()
})

module.exports = router
