const express = require('express')
const router = express.Router()
const whitelist = require('./whitelist')
const analitics = require('./analitics')
const path = require('path')

router.use('/whitelist', whitelist)
router.use('/analitics', analitics)
router.use('/single', (req, res) => {
    res.json({
        toto: 'tata'
    })
})
router.use('/multiple', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala'
    })
})
router.use('/child', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala',
        bobo: {
            titi: 'tata',
            bibi: 'baba'
        }
    })
})
router.use('/tab', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala',
        bobo: ['tata', 'baba']
    })
})
router.use('/complete', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala',
        bobo: {
            titi: 'tata',
            bibi: ['baba', 'rara', 'papa']
        }
    })
})

module.exports = router
