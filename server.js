const express = require('express')
const app = express()


const port = process.env.PORT || 4567

app.get("/", (req, res) => {
    res.send('Ola Mundo')
})




app.listen(port, () => {
    console.info('Aplicação Rodando')
})
