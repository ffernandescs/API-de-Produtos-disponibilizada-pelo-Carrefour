//Controles de mudanças do carrosel da pagina inicial

const btnPrev = document.querySelector('.left')
const btnNext = document.querySelector('.rigth')
const larguraWidth = document.querySelector('.item');
const images = document.querySelectorAll('.item img');

let indexCarosel = 0

btnPrev.addEventListener('click', () => {
    indexCarosel--
    slider();
})

btnNext.addEventListener('click', () => {
    indexCarosel++
    slider();
});

function slider() {

    if(indexCarosel >= images.length){
        indexCarosel = 0
    } else if(indexCarosel < 0) {
        indexCarosel = images.length -1
    }
    larguraWidth.style.marginLeft = -larguraWidth.clientWidth * indexCarosel + 'px'
}

//Função de tempo para rolar automaticamento o carrosel

setInterval(() => {
    indexCarosel++
    slider();
}, 3000)

slider();

//Controles do carrosel de produtos na pagina inicial

const containerSliderProduct = document.querySelectorAll('.boxProduct')

let indexProduct = 0

for(let i = 0; i < containerSliderProduct.length; i++) {
    const prev = containerSliderProduct[i].querySelector('.controls .prev');
    const next = containerSliderProduct[i].querySelector('.controls .next');
    const moverSlider = containerSliderProduct[i].querySelector('.lista .boxes')
    const larguraWidth = containerSliderProduct[i].querySelector('.lista').clientWidth
    prev.addEventListener('click', () => {
        indexProduct--
       if(indexProduct >= 2) {
            indexProduct = 0
       } else if(indexProduct < 0) {
            indexProduct = 2 - 1
       }
       moverSlider.style.marginLeft = -larguraWidth * indexProduct + 'px'
    })

    next.addEventListener('click', () => {
        indexProduct++
       if(indexProduct >= 2) {
            indexProduct = 0
       } else if(indexProduct < 0) {
            indexProduct = 2 - 1
       }
       moverSlider.style.marginLeft = -larguraWidth * indexProduct + 'px'
    })
}

//Função que irar pegar dados da API no BackEnde, para funcionar é necessario ativar o servidor Node

async function getContent2() {
    try {

        let cepStorage = '50740080'

        if(localStorage.getItem('cep')) {
            cepStorage = localStorage.getItem('cep')
        } else { cepStorage = '50740080'}

        const dataOf = await fetch('http://localhost:4567/home?cep=' + cepStorage)
        const data = await dataOf.json();
        const lojaProxima = data[0].sellers[0].name

        getContent(lojaProxima);
    } catch (error) {
        console.error(error)
    }
}

getContent2()


async function getContent(lojaProxima) {
    try {
        const dataOf = await fetch('http://localhost:4567/?lojapd=' + lojaProxima)
        const data = await dataOf.json();
        show(data)

    } catch (error) {
        console.error(error)
    }
}

function show(data) {
    const containerProducts = document.querySelectorAll('.boxProduct')
    for(let q = 0; q < containerProducts.length; q++) {
        const listaProducts = containerProducts[q].querySelector('.boxes')

        for(let i = 0; i < data.length; i++){
            const classBox = `<div class="box ${data[i].brand}">
                                <div class="imgProduto">
                                    <img src="${data[i].items[0].images[0].imageUrl}" alt="">
                                </div>
                                <div class="name">
                                    <p>${data[i].productName}</p>
                                </div>
                                <div class="valor">
                                    <p class="valorAnterior">R$ ${data[i].items[0].sellers[0].commertialOffer.PriceWithoutDiscount}</p>
                                    <h1>R$ ${data[i].items[0].sellers[0].commertialOffer.Price}</h1>
                                    <p>em 1x no cartão ou boleto</p>
                                </div>
                                <div class="favorito">
                                    <i class="material-icons ">favorite_border</i>
                                </div>
                                <div class="desconto">
                                    <span>0%</span>
                                </div>
                            </div>`
            listaProducts.insertAdjacentHTML('beforeend', classBox)
        }
    }
    
}

//Função que irar pegar o valor do cep na pagina inicial

const formCep = document.querySelector('.textLocation form')
const campoCep = document.querySelector('.campoLoacation input')

formCep.addEventListener('submit', e => {

    localStorage.setItem('cep', campoCep.value)
})

// Api de Cep para buscar dados como endereço, cidade e estado

const URL_CEP = `https://viacep.com.br/ws/${localStorage.getItem('cep')}/json/`

fetch(URL_CEP)
.then(res => {
    return res.json()
}).then(data => {
    const cidade = data.localidade
    const estado = data.uf
    const bairro = data.bairro
    const textCidade = document.querySelector('.cidade')
    localStorage.setItem('cidade', `${' ' + cidade + ' ' + '-' + ' ' + estado}`) 
    localStorage.setItem('bairro', `${bairro}`) 
    textCidade.innerHTML = `${' ' + cidade + ' ' + '-' + ' ' + estado}`
})




