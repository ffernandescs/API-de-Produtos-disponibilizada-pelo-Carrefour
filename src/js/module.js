//Função botão accordion 
const btnLinkFooter = document.querySelectorAll('.listaContainer');

function accordionLink() {
        for(let i = 0; i < btnLinkFooter.length; i++) {
            btnLinkFooter[i].addEventListener('click', () => {
                const lista = btnLinkFooter[i].querySelector('.listaLinks');
                lista.classList.toggle('active')
            })
        }

        console.log('okk')
}

accordionLink()

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

// Exibindo e ocultando link´s no top

const menuLinks = document.querySelectorAll('.linkHeader li');

for (let i = 0; i < menuLinks.length; i++) {

    setInterval( menuLinks[i].addEventListener('mouseover', () => {
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

