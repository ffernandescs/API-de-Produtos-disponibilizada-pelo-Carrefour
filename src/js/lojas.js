//Funcao que ira pegar o valor do cep na pagina Lojas

const formCep = document.querySelector('.searchLojas form')
const campoCep = document.querySelector('.cepLoja')

formCep.addEventListener('submit', e => {
    localStorage.setItem('cepLoja', campoCep.value);
    
})

// Api de Cep para buscar dados como endereço, cidade e estado para exibir na pagina Lojas

const URL_CEP = `https://viacep.com.br/ws/${localStorage.getItem('cepLoja')}/json/`

fetch(URL_CEP)
.then(res => {
    return res.json()
}).then(data => {
    const cidadeLoja = data.localidade
    const cidade = localStorage.getItem('cidade')
    const estadoLoja = data.uf
    const bairroLoja = data.bairro
    const logradouro = data.logradouro
    const textCidade = document.querySelector('.cidade')
    localStorage.setItem('cidadeLoja', `${' ' + cidadeLoja + ' ' + '-' + ' ' + estadoLoja}`) 
    localStorage.setItem('bairroLoja', `${bairroLoja}`) 
    localStorage.setItem('logradouroLoja', `${logradouro}`) 
    textCidade.innerHTML = `${cidade}`
})


//Funcao que pega os dados da loja e exibe de acordo com o cep digitado no campo

async function getContent(lojaProxima) {
    try {
        const dataOf = await fetch('http://localhost:4567/?lojas=' + lojaProxima)
        const data = await dataOf.json();


    } catch (error) {
        console.error(error)
    }
}

const listaLojas = document.querySelector('.listaLojas')

async function getContent2() {
    try {
        const cepStorage = localStorage.getItem('cepLoja')
        const cidadeStorage = localStorage.getItem('cidadeLoja')
        const logradouroStorage = localStorage.getItem('logradouroLoja')
        const bairro = localStorage.getItem('bairroLoja')
        const dataOf = await fetch('http://localhost:4567/lojasCp?cep=' + cepStorage)
        const data = await dataOf.json();
        const lojas = data[0].sellers

        console.log(bairro)

        for(let i = 0; i < lojas.length; i++) {
            const listaLoja = lojas[i].id
            const cardLojas = `<div class="cardLojas ${listaLoja}">
                                <div class="itemCard">
                                    <img src="../img/logocard.png" alt="">
                                    <div class="textCard">
                                        <h1>${listaLoja}</h1>
                                        <p>${logradouroStorage}</p>
                                        <p>${cidadeStorage}</p>
                                        <p>CEP: ${cepStorage}</p>
                                    </div>
                                </div>
                                <button>Ver folhetos de ofertas</button>
                                <button>Ver Mapas</button>
                            </div>`
          listaLojas.insertAdjacentHTML('beforeend', cardLojas)
          const totalLojas = document.querySelector('.textTotal h3');
          totalLojas.innerHTML = lojas.length
        }           
        getContent(lojas);
    } catch (error) {
        console.error(error)
    }
}
getContent2()



