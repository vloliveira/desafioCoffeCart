#utf-8
#language: pt

Funcionalidade: Comprar café
    Cenario: Comprar café com desconto e edição do carrinho
    Dado que o usuario está na página menu do Coffee Cart
    Quando o usuario seleciona 3 tipos de cafés diferentes
    E o usuario aceita a oferta promocional de um Mocha
    E o usuario acessa a pagina de carrinho
    E o usuario remove um item do carrinho
    Então o usuario realiza o pagamento
    E a mensagem de sucesso deve ser exibida na tela
 