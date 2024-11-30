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
router.use('/child_tab', (req, res) => {
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
router.use('/complete', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala',
        bobo: {
            titi: 'tata',
            bibi: [
                {
                    toto: 1,
                    coco: 2,
                    lolo: 3
                },
                {
                    toto: 4,
                    coco: 5,
                    lolo: 6
                },
                {
                    toto: 7,
                    coco: 8,
                    lolo: 'lala'
                }
            ]
        }
    })
})

module.exports = router
