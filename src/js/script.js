
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

//Api do carrefour para buscar os produtos da loja enviada no parametro fq
const pathProdutos = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq='

//Api do carrefour para buscar os produtos da loja enviada no parametro postalcode (cep)
const pathLojas = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=50740080'


const produtos = document.querySelector('.boxes')

const URL_PRODUTOS = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq='


fetch(URL_PRODUTOS)
.then((res) => res.json())
.then((data) => {
    console.log(data[1].items[0].sellers[0].commertialOffer)
    for(let i = 0; i < data.length; i++){
        const classBox = `<div class="box ${data[i].brand}">
                    <div class="imgProduto">
                        <img src="${data[i].items[0].images[0].imageUrl}" alt="">
                    </div>
                    <div class="name">
                        <p>${data[i].productName}</p>
                    </div>
                    <div class="valor">
                        <p class="valorAnterior">R$ ${data[1].items[0].sellers[0].commertialOffer.PriceWithoutDiscount}</p>
                        <h1>R$ ${data[1].items[0].sellers[0].commertialOffer.Price}</h1>
                        <p>em 1x no cartão ou boleto</p>
                    </div>
                    <div class="favorito">
                        <i class="material-icons ">favorite_border</i>
                    </div>
                    <div class="desconto">
                        <span>18%</span>
                    </div>
                </div>`
        produtos.insertAdjacentHTML('beforeend', classBox)
    }
   


})








fetch('https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=50740080')
.then(function(response) {
    return response.json()
    
})
.then(function(data) {
})
