const express = require('express')
const app = express()




const port = process.env.PORT || 4568


app.get('/', (req, res)  => {
    res.send('Ola AMigos')
})






app.listen(port, () => {
    console.info('Aplicação Rodando')
})


