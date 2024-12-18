const express = require('express')
const router = express.Router()
const whitelist = require('./whitelist')
const analitics = require('./analitics')
const path = require('path')
const axios = require('axios')

router.use('/whitelist', whitelist)
router.use('/analitics', analitics)
router.use('/single', (req, res) => {
    res.json({
        toto: 'tata'
    })
})

router.post('/translate', async (req, res) => {
    console.log(req.body)
    try {
        const proxy_res = await axios.post(
            'https://api.reverso.net/translate/v1/translation',
            req.body,
            {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                }
            }
        )
        res.json(proxy_res.data)
    } catch (e) {
        console.log(e)
    }
    // res.end()
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
router.use('/types', (req, res) => {
    res.json({
        toto: 'tata',
        coco: 'caca',
        lolo: 'lala',
        bobo: {
            titi: 'tata',
            bibi: [
                {
                    toto: true,
                    coco: false,
                    lolo: 1
                },
                {
                    toto: 3,
                    coco: 'lala',
                    lolo: 'coucou'
                },
                {
                    toto: 7.345345,
                    coco: 3.1415,
                    lolo: 'lala'
                }
            ]
        }
    })
})

module.exports = router
