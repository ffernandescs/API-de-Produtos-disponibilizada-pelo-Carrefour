const express = require('express')
const app = express()




const port = process.env.PORT || 4568


app.get('/', async (req, res)  => {
    res.send('Ola AMigosBetch')
})






app.listen(port, () => {
    console.info('Aplicação Rodando')
})


