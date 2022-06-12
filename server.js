
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')



const produtoURL = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=Carrefour'
const lojaProximaURL = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=`

 

app.use(cors())

app.get('/', async (req, res) => {

    const { data } = await axios(produtoURL)
    return res.json({ data })
})

app.listen('4567')
