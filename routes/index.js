const express = require('express')
const router = express.Router()
const whitelist = require('./whitelist')
const analitics = require('./analitics')
const path = require('path')

router.use('/whitelist', whitelist)
router.use('/analitics', analitics)
router.use('/', (req, res) => {
    res.json({ prout: 'caca' })
})

module.exports = router
