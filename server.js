const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')


const port = process.env.PORT || 4567


app.use(cors())

// Ira passar informação da loja para pagina inicial, a mesma ja recebe o valor do frontEnd

app.get('/', async(req, res) => {
    const lojaProxima = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${lojaProxima}`)

    return res.json(data)
})

// Ira passar informação da Cep para pagina inicial, a mesma ja recebe o valor do frontEnd

app.get('/home', async(req, res) => {
    const cepStorage = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cepStorage.cep}`)
    return res.json(data)

})

// Ira passar informação da loja para pagina Lojas, a mesma ja recebe o valor do frontEnd


app.get('/lojas', async(req, res) => {
    const lojaProxima = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${lojaProxima}`)
    console.log(lojaProxima)

    return res.json(data)
})

// Ira passar informação da Cep para pagina Lojas, a mesma ja recebe o valor do frontEnd


app.get('/lojasCp', async(req, res) => {
    const cep = req.query
    const { data } = await axios(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep.cep}`)
    return res.json(data)
})










app.listen(port, () => {
    console.info('Aplicação Rodando')
})
