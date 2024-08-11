const express = require('express')
const router = express.Router()
const whitelist = require('./whitelist')
const analitics = require('./analitics')
const path = require('path')

router.use('/whitelist', whitelist)
router.use('/analitics', analitics)
router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-build/index.html'))
})

module.exports = router
