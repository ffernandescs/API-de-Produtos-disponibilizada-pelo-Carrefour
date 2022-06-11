const URL_CEP = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=50740080'


async function apiListarCep() {
    try {
        const respónse = await fetch(`${URL_CEP}`, {
            method: 'GET'
        
        })
    
        const data = await respónse.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

function listarCep() {
    apiListarCep().then(total => {
        console.log(total)
    })
}

listarCep()