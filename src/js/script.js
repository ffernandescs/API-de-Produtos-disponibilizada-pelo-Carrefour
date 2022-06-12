const cepValue = localStorage.getItem('cep')

export default {cepValue}



// Exibindo e ocultando link´s no top

const menuLinks = document.querySelectorAll('.linkHeader li');

for (let i = 0; i < menuLinks.length; i++) {
   

    setTimeout( menuLinks[i].addEventListener('mouseover', () => {
        const submenu = menuLinks[i].querySelector('.subMenu li');
        submenu.classList.add('active')
        
    }), 10000);

    menuLinks[i].addEventListener('mouseout', () => {
        const submenu = menuLinks[i].querySelector('.subMenu li');
        submenu.classList.remove('active')
    })
}

// Exibindo e ocultando menu "Todos os Departamentos"

const menuDropdownPrincipal = document.querySelectorAll('.menuDropdown');

for (let i = 0; i < menuDropdownPrincipal.length; i++) {
   

    setTimeout( menuDropdownPrincipal[i].addEventListener('mouseover', () => {
        const submenu = menuDropdownPrincipal[i].querySelector('.subMenuPrincipal');
        submenu.classList.add('active')
        
    }), 10000);

    menuDropdownPrincipal[i].addEventListener('mouseout', () => {
        const submenu = menuDropdownPrincipal[i].querySelector('.subMenuPrincipal');
        submenu.classList.remove('active')
    })
}

//Exibindo e ocultando modal de Localização

const btnLocation = document.querySelector('.ico i')

btnLocation.addEventListener('click', () => {
    const popupLocation = document.querySelector('.popupLocation')
    const btnCloseModal = document.querySelector('.btnCloseModal')
    popupLocation.classList.add('active')
    btnCloseModal.addEventListener('click', () => {
        popupLocation.classList.remove('active')
    })
})

//Exibindo e ocultando botão voltar ao topo do Site ao rolar o Scroll

const btnTop = document.querySelector('.btnTop')

window.addEventListener('scroll', () => {
    if(scrollY > 0) {
        btnTop.classList.add('active')
    } else {
        btnTop.classList.remove('active')
    }
})

//Função voltar ao topo do site com o scroll Suave

btnTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
      })
})

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


//Api do carrefour para buscar os produtos da loja enviada no parametro fq

const containerProducts = document.querySelectorAll('.boxProduct')
async function getContent() {
    try {
        const responde = await fetch('http://localhost:4567/')
        const data = await responde.json()
        const itens = data.data

        for(let q = 0; q < containerProducts.length; q++) {
            const listaProducts = containerProducts[q].querySelector('.boxes')

            for(let i = 0; i < itens.length; i++){
                const classBox = `<div class="box ${itens[i].brand}">
                                    <div class="imgProduto">
                                        <img src="${itens[i].items[0].images[0].imageUrl}" alt="">
                                    </div>
                                    <div class="name">
                                        <p>${itens[i].productName}</p>
                                    </div>
                                    <div class="valor">
                                        <p class="valorAnterior">R$ ${itens[i].items[0].sellers[0].commertialOffer.PriceWithoutDiscount}</p>
                                        <h1>R$ ${itens[i].items[0].sellers[0].commertialOffer.Price}</h1>
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
    } catch (error) {
        console.error('Errou')
    }
}

getContent()

// Api de Cep

const formCep = document.querySelector('.textLocation form')
const campoCep = document.querySelector('.campoLoacation input')




formCep.addEventListener('submit', e => {

    localStorage.setItem('cep', campoCep.value)
})


const URL_CEP = `https://viacep.com.br/ws/${localStorage.getItem('cep')}/json/`

fetch(URL_CEP)
.then(res => {
    return res.json()
}).then(data => {
    const cidade = data.localidade
    const estado = data.uf
    const textCidade = document.querySelector('.cidade')
    localStorage.setItem('cidade', `${' ' + cidade + ' ' + '-' + ' ' + estado}`) 
    textCidade.innerHTML = `${' ' + cidade + ' ' + '-' + ' ' + estado}`
})


