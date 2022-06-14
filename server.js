const express = require('express')
const app = express()
const axios = require('axios')




const port = process.env.PORT || 4568



app.get('/', async(req, res) => {
    const lojaProxima = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${lojaProxima}`)

    return res.json(data)
})

app.get('/home', async(req, res) => {
    const cepStorage = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cepStorage.cep}`)
    return res.json(data)

})




app.listen(port, () => {
    console.info('Aplicação Rodando')
})


