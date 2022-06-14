const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()









router.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    })
})

module.exports.handler = serverless(app)

app.unsubscribe('/.netlify/functions/api',router)