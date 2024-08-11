const express = require('express')
const router = express.Router()
const { whitelistGet } = require('../controller/whitelist.controller')

router.route('/').get(whitelistGet)

module.exports = router
