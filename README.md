# PROJETO • API de Produtos disponibilizada pelo Carrefour

<img src="https://uploaddeimagens.com.br/images/003/903/081/full/Sem_t%C3%ADtulo.png?1655177246" alt="Imagem do Projeto"/>

Link da aplicação: https://apicarrefout.netlify.app/ <br>

## :page_facing_up: Explicação

O projeto tem a proposta de consumir API do carrefour e exibir em um ambiente front End onde ira listar as lojas mais proximas atraveis do CEP e os produtos para a loja mais proxima informado pelo CEP.
Projeto de um buscador de CEP, onde foi consumido a API do sia viacep.com.

  - API-1 Buscar Pontos de Venda Por CEP:** endpoint responsável por retornar os Pontos de Venda do Carrefour.
      https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&**postalCode={cep}

  - API-2 Buscar Produtos Por Ponto de Venda:** busca os Produtos de acordo com o nome de um Ponto de Venda.
      https://mercado.carrefour.com.br/api/catalog\_system/pub/products/search?**fq={seller\_name}
  - API-3 Busca as informações do CEP como: Endereço, Bairro, Cidade e Estado.
  - API Busca as informações do CEP como: Endereço, Bairro, Cidade e Estado.
      https://viacep.com.br/ws/{cep}/json/

Obervação:
  - Para funcionamento das API é necessario antes de tudo Rodar o NodeJs no ambiente de Desenvolvimento, pois as API disponibilizada esta com bloqueios no CORS onde os navegadores ja vem com este bloquei nativo.

O Projeto foi desenvolvido ultilizando HTML, CSS, Java Script e NodeJs.
O Projeto foi desenvolvido ultilizando com ReactJs.

Resultados Alcançados:
  - Na Pagina inicial o ususario ao digitar o CEP na opção ofertas o mesmo ira exibir a Cidade e Estado, em seguida mais abaixo ira mostrar os produtos para este CEP.
  Para este resultado foi ultilizado a API-1 para informar atraveis do CEP as lojas mais proximas e a API-3 para exibir as informações de Endereço, Bairro, Cidade e Estado para o CEP informado.
  A API-2 Recebe da API-1 o "id" da loja mais proxima e exibe os produtos na pagina.

  - No Topo da Pagina Inicial foi incrementado um botão "Lojas" que ira redirecionar a pagina para a tela de Lojas. Nesta tela ira exibir as lojas mais proximas atraveis do CEP informado.
  Para este Resultado foi ultilizado a API-1 que exibi as Lojas mais proximas atraveis do CEP, e para preenchimento dos dados como Endereço, Bairro, Cidade e Estado. A API-3 ira pegar o valor do CEP digitado no campo para exibir as respectivas informaçoes.
  - Na Pagina inicial o ususario ao digitar o CEP sera aberto uma janela contendo as informações comom: Endereço, Bairro, Cidade e Estado.

No projeto foram utilizadas as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com/)
- [ReactJs](https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://pt-br.reactjs.org/)

Componentes para ReactJs
- [React-icons](https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://react-icons.github.io/react-icons/)
